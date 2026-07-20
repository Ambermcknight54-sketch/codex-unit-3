import { PrismaClient } from "./generated/prisma.js";

const prisma = new PrismaClient();
const results = await prisma.users.delete({
  where: {
    email: "aaaaaa@aaaaaa.com",
  },
});
console.log(results);
