import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

const results = await prisma.subjects.findMany();

console.log(results);
console.log(
  "To create a Supa base, click on add new table, add columns, insert values",
  "Put the connection string in .env, then user the Prima file to find any",
);
