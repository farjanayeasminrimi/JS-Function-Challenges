/*
Task-4:
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function findLargestWord(text) {
  let sentence = text.split(" ");
  let longestWord = sentence[0];
  for (let word of sentence) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
let largestWords = findLargestWord("I am learning Programming to become a programmer");
console.log(largestWords);
