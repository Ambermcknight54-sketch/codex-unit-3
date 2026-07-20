import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();
const results = await prisma.users.update({
  where: {
    id: "3",
  },
  data: {
    email: "xxxxxx.com",
  },
});

console.log(results);
