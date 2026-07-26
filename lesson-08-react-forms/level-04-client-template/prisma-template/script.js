// import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

const results = await prisma.products.findMany();
console.log(results);

// import { createWebClient } from "./web-client.js";

// const prisma = await createWebClient({ jsonSchema: "json-schema.json" });

// let results;

// results = await prisma.products.findMany();
// console.log(results);
