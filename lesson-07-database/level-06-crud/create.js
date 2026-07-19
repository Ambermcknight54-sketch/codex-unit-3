import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();
let results;

await prisma.users.create({
  data: {
    email: "aaaaaaaa.com",
    password: "aaaaaaaa ",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "bbbbbbb.com",
    password: "bbbbbb ",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "cccccc.com",
    password: "cccccc ",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "dddddd.com",
    password: "dddddd",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "eeeeee.com",
    password: " eeeeee",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "ffffff.com",
    password: "ffffff",
  },
});
console.log(results);
