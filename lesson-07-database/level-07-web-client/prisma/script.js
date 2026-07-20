import { createWebClient } from "./web-client.js";
const prisma = await createWebClient({ jsonSchema: "jsonSchema.json" });
let results;
results = await prisma.students.create({
  data: {
    name: "Amber",
    level: 3,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Ambra",
    level: 2,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Ammma",
    level: 5,
  },
});
console.log(results);

results = await prisma.students.create({
  data: {
    name: "Emma",
    level: 4,
  },
});
console.log(results);

Results = await prisma.students.create({
  data: {
    name: "Amb",
    level: 1,
  },
});
console.log(results);
results = await prisma.students.findMany();
console.log(results);
console.log(`When your server starts up, it reads that blueprint file into its memory and starts up a fresh Prisma engine instance. It then physically attaches that blueprint map directly onto the client object so it can carry it around like an open map.

3. The Action (prisma.students.create)
When your code tries to add a student like "Amber", your system can look at that attached blueprint map first. It ensures that the fields are spelled correctly and match the data types before wasting time sending a bad request across the internet to the real database.`);
