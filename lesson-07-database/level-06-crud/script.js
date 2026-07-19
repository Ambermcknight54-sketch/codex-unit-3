import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
let results;

results = await prisma.subjects.findMany();
console.log(results);

results = await prisma.users.findMany();
console.log(results);
console.log(`When you run a command like prisma.user.findFirst(),
What Prisma does: It translates this into a database query.
The Return: It captures the database row, maps the database types back into a clean JavaScript object, and returns it to your application.
Update is when you run a command like prisma.user.update(), Prisma performs a targeted data modification:`);
