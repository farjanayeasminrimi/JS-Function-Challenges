/*
Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
     
Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}
*/

function calcBill(prices, items) {
  let itemsCount = {};
  let total = 0;

  for (let item of items) {
    // total += prices[item];
    let itemCheck = itemsCount.hasOwnProperty(item);
    if (itemCheck === true) {
      itemsCount[item] += 1;
    } else {
      itemsCount[item] = 1;
    }
  }
  for (let item in itemsCount) {
    let price = prices[item];
    let quantity = itemsCount[item];
    let pricePerQuantity = price * quantity;
    total += pricePerQuantity;
  }
  return {
    total,
    itemsCount,
  };
}
let case1 = calcBill(
  (prices = { rice: 70, oil: 180, egg: 12, sugar: 90 }),
  (items = ["egg", "egg", "rice", "oil", "egg", "sugar"]),
);

let case2 = calcBill((prices = { pen: 10, book: 50 }), (items = ["pen", "pen", "book", "pen"]));
console.log(case1);
console.log(case2);
