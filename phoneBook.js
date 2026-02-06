/*
Problem 6: Phonebook Prefix Search
Function name: searchByPrefix(phonebook, prefix)
Statement:
 Return an array of names that start with the given prefix.
Test case 1
Input:
phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:
["rahim", "rafi"]

Test case 2
Input:
phonebook = { mina: "013", mim: "014", rina: "015" };
prefix = "mi";

Output:
["mina", "mim"]
*/

function searchByPrefix(phonebook, prefix) {
  let filteringName = [];
  for (let name in phonebook) {
    if (name.startsWith(prefix)) {
      filteringName.push(name);
    }
  }
  return filteringName;
}
let output = searchByPrefix({ rahim: "0181", karim: "0172", rafi: "0193" }, "ra");

let output2 = searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "mi");

console.log(output);
console.log(output2);
