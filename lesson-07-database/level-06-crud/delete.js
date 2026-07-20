import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
const results = await prisma.users.delete({
  where: {
    email: "aaaaaa.com",
    id: "1",
  },
});
console.log(results);
