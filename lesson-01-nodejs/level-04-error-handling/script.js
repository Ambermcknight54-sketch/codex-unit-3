console.log("Attempting to access browser features...");
localStorage.setItem("username", "Amber");
const pTag = document.querySelector("pTag");

try {
  localStorage.setItem("username", "Amber");
  const pTag = document.querySelector("pTag");
  console.log("Success!");
} catch (error) {
  console.log("This is an error!");
}
