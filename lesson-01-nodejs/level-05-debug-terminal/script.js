console.log("Roses are red.");
console.log("Violets are blue.");

try {
  localStorage.username = "Amber";
  const paragraph = document.querySelector("p");
} catch (error) {
  console.log("An error was caught");
}

// Task 6 & 7: Message explaining how to use the JavaScript Debug Terminal
console.log("\n How to use the JavaScript Debug Terminal");
console.log("1. Open the terminal panel in VS Code (Ctrl+` or Cmd+`).");
console.log(
  "2. Click the dropdown arrow next to the '+' icon in the terminal window panel.",
);
console.log("3. Select 'JavaScript Debug Terminal' from the menu.");
console.log(
  "4. Navigate to your folder and type 'node script'—it will automatically trigger any breakpoints!",
);
