import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const results = await prisma.products.findMany();
onsole.log(results);
