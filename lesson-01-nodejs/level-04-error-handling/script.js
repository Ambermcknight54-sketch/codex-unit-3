console.log("Attempting to access browser features...");
try {
  localStorage["username"] = "Amber";
  const paragraph = document.querySelector("p");

  console.log("Success!");
} catch (error) {
  // Tasks 5 & 6: Catching the error and explaining why it happened
  console.log("⚠️ An Error Was Caught Safely!");
  console.log("Reason for error:", error.message);
  console.log("\nlocal storage not provided");
  console.log(
    "This error occurs because we are running this script inside Node.js.",
  );
  console.log("Node.js objects like 'localStorage' do not exist here!");
}
