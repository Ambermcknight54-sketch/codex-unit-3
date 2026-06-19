console.log("Attempting to access browser features...");
localStorage.setItem("username", "Amber");
const pTag = document.querySelector("p");

try {
  localStorage.setItem("username", "Amber");
  const pTag = document.querySelector("p");

  console.log("Success!");
} catch (error) {
  // Tasks 5 & 6: Catching the error and explaining why it happened
  console.log("The is an error!");
  console.log("Reason for error:", error.message);
  console.log("\n local storage not provided");
  console.log(
    "This error occurs because we are running this script inside Node.js.",
  );
  console.log("Node.js objects like 'localStorage' do not exist here!");
}
