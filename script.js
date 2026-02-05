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
