import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

const results = await prisma.products.findMany();

console.log(results);
