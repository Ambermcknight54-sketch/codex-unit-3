import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
const result = await prisma.subjects.findMany();
console.log(results);
