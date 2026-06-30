import { useState } from "react";

function Main() {
  const results = useState(0);

  // Execution pauses here during rendering to let you inspect the 2-item array
  debugger;

  const count = results[0];
  const setCount = results[1];

  
  
  function handleClick(event) {
     debugger;
    event.preventDefault();
    setCount(count + 1
  }

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p> "useState is like a label and a button. The count variable is the label that shows a number. The setCount function is the button that changes that number. Use array brackets on the left side. 'Event.preventDefault' stops the page from reloading";
      </p>
    </main>
  );
}

export default Main;
