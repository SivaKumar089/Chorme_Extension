import { getRandomQuote } from './quotes.js';

document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const newQuoteBtn = document.getElementById('new-quote');
  const notificationsToggle = document.getElementById('notifications-toggle');
  const statusText = document.getElementById('status-text');

  // Display a random quote when the popup opens
  displayRandomQuote();

  // Load notification preference
  chrome.storage.local.get(['notificationsEnabled'], (result) => {
    const isEnabled = result.notificationsEnabled !== false; // Default to true if not set
    notificationsToggle.checked = isEnabled;
    updateStatusText(isEnabled);
  });

  // Event listener for new quote button
  newQuoteBtn.addEventListener('click', displayRandomQuote);

  // Toggle notifications
  notificationsToggle.addEventListener('change', (e) => {
    const isEnabled = e.target.checked;
    chrome.storage.local.set({ notificationsEnabled: isEnabled }, () => {
      // Send message to background script to update alarm
      chrome.runtime.sendMessage({
        action: 'toggleNotifications',
        enabled: isEnabled
      });
      updateStatusText(isEnabled);
    });
  });

  // Function to display a random quote
  function displayRandomQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  }

  // Update the status text based on toggle state
  function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'Enabled' : 'Disabled';
    statusText.style.color = isEnabled ? '#4ecdc4' : '#e74c3c';
  }
});
