const numbers = ["11", "22", "33", "44", "55", "66", "77", "88", "99", "109"];
for (let index = 0; index < numbers.length; index++) {
  const item = numbers[index];
  const itemNumber = index + 1;
  console.log(`${itemNumber}. ${item}`);
}
