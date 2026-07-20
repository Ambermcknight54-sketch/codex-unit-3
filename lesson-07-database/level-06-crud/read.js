import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
let results;

results = await prisma.users.findMany({
  where: { email: "eeeeee.com" },
  //  id: 5n,
});
console.log(results);

results = await prisma.users.findMany({
  where: { email: "zzzzzz.com" },
  //  id: 3n,
});
console.log(results);

results = await prisma.users.findFirst({
  where: {
    email: "bbbbbb.com",
    // id: 2n,
  },
});
console.log(results);

// const uniqueResults = await prisma.users.findUnique({
//   where: {
//     email: "dddddd.com",
//     password: "dddddd",
//     id: "4",
//   },
// });
// console.log(uniqueResults);
