import { createWebClient } from "./web-client.js";

const prima = await createWebClient({ jsonSchema: "jsonSchema.json" });
let results;

prima.products.create({
  data: {
    name: "emoji",
    src: "emojiCode.jpeg",
    price: 13.45,
  },
});
console.log(results);

console.log(results);
results = await prisma.products.findMany();
console.log(results);
console.log("TOO DO");
