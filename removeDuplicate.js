/*
Problem 5: Remove Duplicates From Array
Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]
*/

function removeDuplicates(arr) {
  let filteringArr = [];
  for (let number of arr) {
    let finding = filteringArr.includes(number);
    if (!finding) {
      filteringArr.push(number);
    }
  }
  return filteringArr;
}
let case1 = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
// let case2 = removeDuplicates([1, 1, 1, 1]);
console.log(case1);
