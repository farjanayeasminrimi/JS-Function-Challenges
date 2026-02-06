/*
Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8
Must contain at least 1 number
Must contain at least 1 uppercase letter
Must not contain spaces

Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

Test case 2
Input:  "Hello123"
Output: { valid: true, reasons: [] }
*/

function checkPassword(password) {
  let length = password.length;
  let reason = [];
  let rules1 = length >= 8;
  let hasUppercase = false;
  let hasNumber = false;
  let valid = false;

  if (!rules1) {
    reason.push("Must contain min 8 character");
  }

  for (let char of password) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    }
  }
  if (hasNumber === false) {
    reason.push("Must contain a number");
  }

  if (hasUppercase === false) {
    reason.push("Must contain min one upperCase");
  }

  if (password.includes(" ")) {
    reason.push("Cannot have space");
  }
  if (reason.length === 0) {
    valid = true;
  }
  return {
    valid,
    reason,
  };
}
let caseOne = checkPassword("hello world");
let caseTwo = checkPassword("Hello123");
console.log(caseOne);
console.log(caseTwo);
