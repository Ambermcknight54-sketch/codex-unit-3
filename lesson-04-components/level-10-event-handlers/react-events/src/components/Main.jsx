import React from "react";

function Main() {
  return (
    <main>
      <button onClick={handleClick}>Click event</button>
    </main>
  );
}

function handleClick(event) {
  event.preventDefault();
  debugger;
  console.log(
    "To handle click events in React, you attach an onClick attribute directly to an HTML element like a button and pass it the name of a callback function. That function automatically receives an event object which you can use to control or prevent standard browser behaviors.",
  );
}

export default Main;
