import { PrismaClient } from "./prisma-template/generated/prisma/client.js";

const prisma = new PrismaClient();

const results = await prisma.products.findMany();

console.log(results);

// const prisma = new PrismaClient();
// let results;
// results = await prisma.users.create({
//   data: {
//     name: "purifier",
//     src: "https://www.amazon.com/Airspark-Purifiers-Purifier-Cooking-Cleaner/dp/B0CGPTRQR2?th=1",
//     price: "85.00",
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
