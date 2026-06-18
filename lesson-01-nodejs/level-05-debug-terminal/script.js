console.log("Roses are red.");
console.log("Violets are blue.");
console.log("Roses are red.");
console.log("Violets are blue.");

try {
  // Try to use a browser feature using bracket notation instead of a dot
  localStorage["username"] = "Amber";
  const paragraph = document.querySelector("p");
} catch (error) {
  // This block runs when the error happens
  console.log("The debugger caught an error!");

  // Explaining how to use the debugger controls
  console.log("\n Debugger Runs");
  console.log(
    "• Continue (F5): Runs the rest of the program until the next breakpoint.",
  );
  console.log(
    "• Step Over (F10): Moves to the very next line of code in this file.",
  );
  console.log(
    "• Step Into (F11): Enters inside a function call to debug it line-by-line.",
  );
  console.log(
    "• Step Out (Shift+F11): Exits the current function and goes back to where it was called.",
  );
}
