/*
Problem 7: Text Stats Generator
Function name: textStats(text)
Statement:
 Return an object containing:
Characters count excluding spaces
Words count
Vowels count
Consonants count

Test case 1
Input:
 "JavaScript is fun to learn"
Output:
{ characters: 22, words: 5, vowels: 8, consonants: 14 }

Test case 2
Input:
 " I am OK "
Output:
{ characters: 5, words: 3, vowels: 3, consonants: 2 }
*/

function textStats(text) {
  let characters = 0;
  let vowels = "aeiou";
  let vowelsCount = 0;
  let consonants = 0;
  let words = text.trim().split(" ").length;
  for (let letter of text) {
    if (letter !== " ") {
      characters++;
    }
    if (vowels.includes(letter.toLowerCase()) === true) {
      vowelsCount++;
    } else if (vowels.includes(letter.toLowerCase()) === false && letter !== " ") {
      consonants++;
    }
  }
  return {
    characters,
    words,
    vowels: vowelsCount,
    consonants,
  };
}
let caseResult = textStats("JavaScript is fun to learn");
let caseResult2 = textStats(" I am OK ");
console.log(caseResult);
console.log(caseResult2);
