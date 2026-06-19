console.log("Attempting to access browser features...");
localStorage.setItem("username", "Amber");
const pTag = document.querySelector("p");

try {
  console.log("Attempting to access browser features...");
  localStorage.setItem("username", "Amber");
} catch (error) {
  console.log("There is an error.");
}
