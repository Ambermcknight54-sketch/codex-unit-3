// import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
const results = await prisma.products.findMany();
console.log(results);

// const prisma = new PrismaClient();
// const results = await prisma.users.delete({
//   where: {
//     email: "ffffff.com",
//     id: "18",
//   },
// });
// console.log(results);

// results = await prisma.users.findFirst({
//   where: {
//     email: "bbbbbb.com",
//     id: 2n,
//   },
// });
// console.log(results);

// results = await prisma.users.findMany({
//   where: {
//     email: "bbbbbb.com",
//     id: 2n,
//   },
// });
// console.log(results);

// const results = await prisma.users.delete({
//   where: {
//     email: "ffffff.com",
//     id: "18",
//   },
// });
// console.log(results);

// const results = await prisma.users.update({
//   where: {
//     id: "3",
//   },
//   data: {
//     email: "xxxxxx.com",
//   },
// });

// console.log(results);

// results = await prisma.users.create({
//   data: {
//     email: "bbbbbb.com",
//     password: "bbbbbb ",
//   },
// });
// console.log(results);
