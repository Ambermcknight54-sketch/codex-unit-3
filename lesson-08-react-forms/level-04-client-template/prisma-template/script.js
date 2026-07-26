// import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

const prisma = await createWebClient({ jsonSchema: "json-schema.json" });

let results;

// Reassignment works now!
results = await prisma.products.findMany();
console.log(results);

// const prisma = new PrismaClient();
// let results;

// results = await prisma.users.create({
//   data: {
//     name: "purifier",
//     src: "https://www.amazon.com/Airspark-Purifiers-Purifier-Cooking-Cleaner/dp/B0CGPTRQR2?th=1",
//     price: 85.0, // Pass as a number
//   },
// });
// console.log("CREATE", results);

// results = await prisma.users.update({
//   where: {
//     id: 10,
//   },
//   data: {
//     price: 13.45,
//   },
// });
// console.log("UPDATE", results);

// results = await prisma.users.delete({
//   where: {
//     id: 7,
//   },
// });
// console.log("DELETE", results);
