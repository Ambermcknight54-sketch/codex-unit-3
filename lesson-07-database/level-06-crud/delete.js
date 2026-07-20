import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
const results = await prisma.users.delete({
  where: {
    email: "ffffff.com",
    id: "12",
  },
});
console.log(results);
