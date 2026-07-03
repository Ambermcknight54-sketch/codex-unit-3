//  Explaining when npx is required vs not required
console.log("=== Understanding when npx is required vs not required ===");

console.log("\n1. Inside NPM Scripts (package.json):");
console.log("   npx is NOT required.");
console.log(
  "   Reason: npm run automatically looks inside your local './node_modules/.bin' folder first.",
);

console.log("\n2. Directly in the Terminal:");
console.log("   npx IS required for locally installed packages.");
console.log(
  "   Reason: Your terminal shell doesn't know where node_modules is. npx bridges that gap, or downloads the package on-the-fly if it isn't installed.",
);
