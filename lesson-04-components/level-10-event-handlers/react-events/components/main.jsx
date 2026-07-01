import React from "react";

function Main() {
  return (
    <main>
      {/* 6. Added button tag with text */}
      {/* 12. Added onClick attribute referencing handleClick */}
      <button onClick={handleClick}>Click event</button>
    </main>
  );
}

// 7. Created handleClick outside and underneath the Main function
// 8. Passed the event object parameter
function handleClick(event) {
  // 9. Prevents the default HTML element behavior
  event.preventDefault();

  // 10. Pauses execution when the button is clicked
  debugger;

  // 10 & 11. Logged message explaining the event handler
  console.log(
    "To handle click events in React, you attach an onClick attribute directly to an HTML element like a button and pass it the name of a callback function. That function automatically receives an event object which you can use to control or prevent standard browser behaviors.",
  );
}

export default Main;
