console.log(" Directly in the Terminal:");
console.log("   npx IS required for locally installed packages.");
console.log(
  " Reason: Your terminal can't find local project packages without it.",
);

console.log("=== When is npx required? ===");

console.log("\n1. NOT REQUIRED: Inside package.json scripts");
console.log('   Example: "message": "cowsay Hello"');
console.log("   Reason: npm automatically finds local packages here.");

console.log("\n2. REQUIRED: Directly in your terminal");
console.log("   Example: npx cowsay Hello");
console.log(
  "   Reason: Your terminal can't find local project packages without it.",
);
