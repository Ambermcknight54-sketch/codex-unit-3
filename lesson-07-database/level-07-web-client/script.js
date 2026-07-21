import { createWebClient } from "./webClient.js";

const prisma = await createWebClient({ jsonSchema: "jsonSchema.json" });

let results;

results = await prisma.students.create({
  data: {
    name: "Amber",
    level: 3n,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Ambra",
    level: 2n,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Ammma",
    level: 5n,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Emma",
    level: 4n,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Amb",
    level: 1n,
  },
});
console.log(results);

results = await prisma.students.findMany();
console.log(results);
console.log(
  "Prisma loads jsonSchema.json to validate student data locally before creating records in PostgreSQL.",
);
