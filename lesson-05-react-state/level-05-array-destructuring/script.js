import { results } from "./results.js";

// Halts execution here when run in a JavaScript Debug Terminal
debugger;

// Unpacking items from the array sequentially into standalone variables
const [count, displayMessage] = results;

// Displaying the values and executing the extracted function
console.log(count);
displayMessage();
