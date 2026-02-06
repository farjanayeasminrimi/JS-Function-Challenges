/*
Task-5:
Generate a random number between 10 to 20.
*/

function randomNumber(num1) {
  let number = Math.round(Math.random() * num1) + num1;
  return number;
}
let randomNum = randomNumber(10);
console.log(randomNum);
