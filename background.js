import { getRandomQuote } from './quotes.js';

// Initialize storage with default values
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['notificationsEnabled'], (result) => {
    if (result.notificationsEnabled === undefined) {
      chrome.storage.local.set({ notificationsEnabled: true });
    }
  });
  setupAlarm();
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleNotifications') {
    if (request.enabled) {
      setupAlarm();
      showQuoteNotification();
    } else {
      chrome.alarms.clear('quoteAlarm');
    }
  }
  return true;
});

// Create a notification with a random quote
async function showQuoteNotification() {
  const quote = getRandomQuote();
  
  chrome.notifications.create({
    type: 'basic',
    iconUrl: chrome.runtime.getURL('icons/icon.png'),
    title: 'Motivation Boost!',
    message: `"${quote.text}"\n- ${quote.author}`,
    priority: 2
  });
}

// Set up the alarm to trigger notifications
function setupAlarm() {
  // Clear any existing alarms to prevent duplicates
  chrome.alarms.clear('quoteAlarm');
  
  // Create a new alarm that triggers every minute
  chrome.alarms.create('quoteAlarm', {
    delayInMinutes: 0,  // Start immediately
    periodInMinutes: 1  // Repeat every minute
  });
}

// Listen for alarm events
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'quoteAlarm') {
    chrome.storage.local.get(['notificationsEnabled'], (result) => {
      if (result.notificationsEnabled !== false) {
        showQuoteNotification();
      }
    });
  }
});
