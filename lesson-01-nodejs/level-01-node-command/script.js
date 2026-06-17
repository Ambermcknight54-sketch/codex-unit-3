const encoded =
  "KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoKKiAgICAgICAgICAgICAgICAgICAgWW91IHJhbiBKYXZhU2NyaXB0IHdpdGhvdXQgYSBicm93c2VyISAgICAgICAgICAgICAgICAgICAgICoKKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoKKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioK";

console.log("\n");
decodeAndReveal();

async function decodeAndReveal() {
  const text = Buffer.from(encoded, "base64").toString("utf8");
  for (let index = 0; index < text.length; index++) {
    const letter = text[index];
    process.stdout.write(letter);
    await timeout(6);
  }
  process.stdout.write("\n");
  process.exit(0);
}

async function timeout(milliseconds) {
  await new Promise(curried(milliseconds));
}

function curried(milliseconds) {
  return function (resolve) {
    setTimeout(resolve, milliseconds);
  };
}
