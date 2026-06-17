export function stats(a, b) {
  const sum = a + b;
  const product = a * b;
  const average = sum / 2;
  console.log("A few math facts about", a, "and", b);
  console.log(`Sum: ${sum}`);
  console.log(`Product: ${product}`);
  console.log(`Average: ${average}\n`);
}
