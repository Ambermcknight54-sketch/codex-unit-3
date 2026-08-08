import { createWebClient } from "./react-create/web-client.js";

const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
const results = await prisma.products.findMany();
console.log(results);
