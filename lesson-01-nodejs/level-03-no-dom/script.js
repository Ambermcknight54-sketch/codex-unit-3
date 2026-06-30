console.log("Attempting to access browser features...");

try {
  // Move these inside the try block so the catch block can actually handle the error
  localStorage.setItem("username", "Amber");
  const pTag = document.querySelector("pTag");

  console.log("Success!");
  debugger;
} catch (error) {
  // Tasks 5 & 6: Catching the error and explaining why it happened
  console.log("There is an error!");
  // console.log("Reason for error:", error.message);
  console.log("\nLocal storage or DOM features are not available.");
  // console.log(
  // //   "This error occurs because we are running this script inside Node.js.",
  // );
  console.log(" localStorage and document do not exist here!");
}

// console.log("Attempting to access browser features...");
// localStorage.setItem("username", "Amber");
// const pTag = document.querySelector("p");

// try {
//   console.log("Attempting to access browser features...");
//   localStorage.setItem("username", "Amber");
// } catch (error) {
//   console.log("There is an error.");
// }
