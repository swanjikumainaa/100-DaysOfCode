
// Prompt the user to enter a sentence
let sentence = prompt("Enter a sentence:");

// Remove leading and trailing whitespace
let trimmedSentence = sentence.trim();

// Split the trimmed sentence into an array of words
let words = trimmedSentence.split(" ");

// Reverse the order of the words
let reversedWords = words.reverse();

// Join the reversed words into a new sentence with proper capitalization
let reversedSentence = reversedWords.join(" ");

// Capitalize the first letter of the reversed sentence
let capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log("Reversed Sentence:");
console.log(capitalizedSentence);
