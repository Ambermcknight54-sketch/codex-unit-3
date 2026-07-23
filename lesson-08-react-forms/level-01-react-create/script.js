import { PrismaClient } from "./generated/prisma/";
import { createWebClient } from "./web-client.js";

async function main() {
  const prisma = await createWebClient({ jsonSchema: "json-schema.json" });

  const results = await prisma.products.findMany();

  console.log(results);
}
