// import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
const results = await prisma.products.findMany();
console.log(results);

// const prisma = new PrismaClient();
// const results = await prisma.users.delete({
//   where: {
//     email: "ffffff.com",
//     id: "18",
//   },
// });
// console.log(results);
