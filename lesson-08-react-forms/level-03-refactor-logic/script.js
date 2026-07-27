import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

const prisma = new PrismaClient({ jsonSchema: "json-schema.json" });
// const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
results = await prisma.products.findMany();
console.log(results);
