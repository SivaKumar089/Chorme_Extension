const MOTIVATIONAL_QUOTES = [
    {
        text: "Dream big, work hard, stay focused, and surround yourself with good people.",
        author: "Unknown"
    },
    {
        text: "Hard work beats talent when talent doesn’t work hard.",
        author: "Tim Notke"
    },
    {
        text: "Don’t stop when you are tired. Stop when you are done.",
        author: "Unknown"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Believe in yourself and all that you are.",
        author: "Christian D. Larson"
    },
    {
        text: "You don’t have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        author: "Unknown"
    },
    {
        text: "Opportunities don’t happen, you create them.",
        author: "Chris Grosser"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },
    {
        text: "Your limitation—it’s only your imagination.",
        author: "Unknown"
    },
    {
        text: "Sometimes later becomes never. Do it now.",
        author: "Unknown"
    },
    {
        text: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        text: "Work hard in silence, let success make the noise.",
        author: "Frank Ocean"
    },
    {
        text: "Don’t wait for opportunity. Create it.",
        author: "Unknown"
    },
    {
        text: "Doubt kills more dreams than failure ever will.",
        author: "Suzy Kassem"
    },
    {
        text: "Make each day your masterpiece.",
        author: "John Wooden"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Failure is not the opposite of success; it’s part of success.",
        author: "Arianna Huffington"
    },
    {
        text: "If you want to achieve greatness stop asking for permission.",
        author: "Unknown"
    },
    {
        text: "Don’t be pushed by your problems. Be led by your dreams.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "The harder you work for something, the greater you’ll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Success is not for the lazy.",
        author: "Unknown"
    },
    {
        text: "Your life does not get better by chance; it gets better by change.",
        author: "Jim Rohn"
    },
    {
        text: "Be stubborn about your goals and flexible about your methods.",
        author: "Unknown"
    },
    {
        text: "Small progress is still progress.",
        author: "Unknown"
    },
    {
        text: "Stay away from negative people. They have a problem for every solution.",
        author: "Albert Einstein"
    },
    {
        text: "Don’t limit your challenges. Challenge your limits.",
        author: "Jerry Dunn"
    }

];

export function getRandomQuote() {
    return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}
