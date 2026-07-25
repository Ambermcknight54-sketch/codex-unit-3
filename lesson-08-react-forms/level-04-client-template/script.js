import { PrismaClient } from "./generated/prisma/";
import { createWebClient } from "./web-client.js";
const prisma = await PrismaClient({ jsonSchema: "json-schema.json" });

let results;
results = await prisma.users.create({
  data: {
    name: "purifier",
    src: "https://www.amazon.com/Airspark-Purifiers-Purifier-Cooking-Cleaner/dp/B0CGPTRQR2?th=1",
    price: "85.00",
  },
});
console.log("CREATE", results);

const results = await prisma.products.findMany({
  where: {
    price: {
      lte: 80,
    },
  },
});

console.log(results);

results = await prisma.users.update({
  where: {
    id: 10,
  },
  data: {
    price: 13.45,
  },
});
console.log("UPDATE", results);

const results = await prisma.users.delete({
  where: {
    id: 7,
  },
});
console.log("DELETE", results);
