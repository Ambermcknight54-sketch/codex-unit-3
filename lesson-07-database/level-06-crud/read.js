import { PrismaClient } from "@prisma/client.js";

const prisma = new PrismaClient();
let results;

results = await prisma.users.findMany({
  where: { email: "aaaaaa.com" },
});
console.log(results);

results = await prisma.users.findMany({
  where: { email: "cccccc.com" },
});
console.log(results);

results = await prisma.users.findFirst({
  where: {
    email: "bbbbbb.com",
    id: 5n,
  },
});
console.log(result);

const results = await prisma.users.findUnique({
  where: {
    email: "dddddd.com",
    password: "dddddd",
    id: 8n,
  },
});
console.log(result);
