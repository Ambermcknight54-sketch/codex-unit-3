import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();
let results;

await prisma.users.create({
  data: {
    email: "aaaaaa.com",
    password: "aaaaaa",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "bbbbbb.com",
    password: "bbbbbb ",
  },
});
console.log(results);

results = await prisma.users.create({
  data: {
    email: "cccccccc.com",
    password: "cccccccc ",
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
