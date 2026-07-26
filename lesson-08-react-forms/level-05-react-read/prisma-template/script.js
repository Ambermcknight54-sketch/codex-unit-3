import { PrismaClient } from "./generated/prisma/";

const prisma = new PrismaClient();

const results = await prisma.products.findMany();

console.log(results);
