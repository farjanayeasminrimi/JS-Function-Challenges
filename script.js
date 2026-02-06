/* convert a number inch to feet */

function inchToFeet(inch) {
  const feetFormula = inch / 12;
  const feet = parseInt(feetFormula);
  const inches = inch % 12;
  const result = feet + " ft " + inches + " inch";
  return result;
}
let feet = inchToFeet(75);
// console.log(feet);

////////////////////////////////////////////////////////

/**
 * Check a year is leap year or not
 */

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, " is leap year");
  } else {
    console.log(year, " is not a leap year");
  }
}
// checkLeapYear(2100);

//////////////////////////////////////////////////////////////

/**
 * function takes an array as parameter
 * gives the average of the odd numbers in the array
 */

function oddAvg(arr) {
  let odd = [];
  for (number of arr) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  let sum = 0;
  for (num of odd) {
    sum += num;
  }
  const avg = sum / odd.length;
  console.log(avg);
}
// const numbers = [12, 3, 5, 23, 67, 8, 32];
// oddAvg(numbers);

////////////////////////////////////////////////////////////

/*
 *Remove duplicate item from an array
 */

function filtering(arr) {
  let filterNames = [];
  for (name of arr) {
    if (filterNames.includes(name) === false) {
      filterNames.push(name);
    }
  }
  return filterNames;
}
let array = ["robita", "nobita", "kobita", "robita", "nobita", "kotha", "ruba", "robita"];
const filterArray = filtering(array);
// console.log(filterArray);

////////////////////////////////////////////////////////////

/*
Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.

Rules:
Ignore case differences
Ignore extra spaces

Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }
*/

function wordFrequency(sentence) {
  let words = sentence.split(" ");
  let count = {};
  for (word of words) {
    let wordLowerCase = word.toLowerCase();
    if (count.hasOwnProperty(wordLowerCase) === true) {
      count[wordLowerCase] += 1;
    } else {
      count[wordLowerCase] = 1;
    }
  }
  return count;
}
const sentence = `I love JS and I love coding and JS js is fun Fun`;
let result = wordFrequency(sentence);
// console.log(result);

/////////////////////////////////////////////////////////////////

/*
Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.

Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }
Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }
*/

function analyzeMarks(marksObj) {
  let total = 0;
  let max = -Infinity;
  let min = Infinity;
  let highestSubject;
  let lowestSubject;
  for (let subject in marksObj) {
    let mark = marksObj[subject];
    total += mark;
    /*----------------------------------------- */
    if (mark > max) {
      max = mark;
      highestSubject = subject;
    }
    if (mark < min) {
      min = mark;
      lowestSubject = subject;
    }
  }
  const length = Object.keys(marksObj).length;
  const average = total / length;

  return {
    total,
    average,
    highest: highestSubject,
    lowest: lowestSubject,
  };
}
const obj = { math: 78, english: 65, physics: 88, bangla: 55 };
const output = analyzeMarks(obj);
// console.log(output);

//////////////////////////////////////////////////////////
