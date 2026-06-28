function Main() {
  return (
    <main>
      <h2>Event Handling</h2>
      <button onClick={handleClick}>Click event</button>
    </main>
  );
}

function handleClick(event) {
  event.preventDefault();

  // Execution pauses here in the VS Code browser debugger when the button is clicked
  debugger;

  console.log(
    "To use a click event handler in React, assign an event listener function directly to the element's 'onClick' attribute using camelCase and curly braces. The handler function automatically receives a synthetic event object, allowing you to control behaviors like event.preventDefault().",
  );
}

export default Main;
