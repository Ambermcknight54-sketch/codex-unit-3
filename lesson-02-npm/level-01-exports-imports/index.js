import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log("Benefits of Exports & Imports");
console.log("Using export and import makes code modular. This helps by:");
console.log("- Keeping code organized and readable.");
console.log("- Making components easier to debug.");
console.log("- Allows code to be reused.");
