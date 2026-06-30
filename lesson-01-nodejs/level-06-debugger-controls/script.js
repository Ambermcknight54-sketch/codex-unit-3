// console.log("Attempting to access browser features...");

try {
  console.log("Attempting to access browser features...");
  localStorage.setItem("username", "Amber");
  const pTag = document.querySelector("pTag");
} catch (error) {
  console.log("An error was caught by the try/catch block!");
}
// Tasks 5 & 6: Catching the error and explaining the debugger control

console.log("Quick Debugger Controls Guide");
console.log(
  "• Continue (F5): Keeps running the code until it hits another breakpoint.",
);
console.log(
  "• Step Over (F10): Advances exactly one line forward in this file.",
);
console.log(
  "• Step Into (F11): Jumps inside a function call to look at its inner code.",
);
console.log(
  "• Step Out (Shift+F11): Finishes the current function and pops back out to where it was called.",
);
