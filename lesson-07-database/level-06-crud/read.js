import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const result = await prisma.users.findMany({
  where: { email: "aaaaaa.com" },
});
console.log(results);
