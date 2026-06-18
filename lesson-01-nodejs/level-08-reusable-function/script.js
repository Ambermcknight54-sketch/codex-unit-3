const fruits = [
  "Apples",
  "Bananas",
  "Cherries",
  "Dates",
  "Elderberries",
  "Figs",
  "Grapes",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

for (let index = 0; index < fruits.length; index++) {
  const item = fruits[index];
  const itemNumber = index + 1;
  console.log(`${itemNumber}. ${item}`);
}

// Reusable showItems function
function showItems(arrayDisplay) {
  for (let index = 0; index < arrayDisplay.length; index++) {
    const item = arrayDisplay[index];
    const itemNumber = index + 1;
    console.log(`${itemNumber}. ${item}`);
  }
}

// 2. Create an array with 10 values
const numbers = [
  "Apples",
  "Bananas",
  "Cherries",
  "Dates",
  "Elderberries",
  "Figs",
  "Grapes",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

// 3, 4, 5. Initial loop
for (let index = 0; index < numbers["length"]; index++) {
  const item = numbers[index];
  const itemNumber = index + 1;
  console.log(`${itemNumber}. ${item}`);
}

// 7, 8. Create the showItems function
function showItems(arrayToDisplay) {
  for (let index = 0; index < arrayToDisplay["length"]; index++) {
    const item = arrayToDisplay[index];
    const itemNumber = index + 1;
    console.log(`${itemNumber}. ${item}`);
  }
}
