import { PrismaClient } from "@prisma/client.js";

const results = await prisma.users.update({
  where: {
    id: 3n,
  },
  data: {
    email: "zzzzzz@zzzzzz.com",
  },
});

console.log(results);
