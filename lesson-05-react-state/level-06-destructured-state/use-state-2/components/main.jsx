import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  // Execution pauses here during rendering to let you inspect count and setCount
  debugger;

  const message =
    "useState is like a label and a button. The count variable is the label that shows a number. The setCount function is the button that changes that number. Use array brackets on the left side. 'Event.preventDefault' stops the page from reloading";

  function handleClick(event) {
    event.preventDefault();
    // Execution pauses here on each click before updating the layout state
    debugger;

    setCount(count + 1);
  }

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
       Using useState with array destructuring lets you unpack the state variable and its setter function onto a single line of code.
        setCount.
      </p>
    </main>
  );
    </main>
  );
}

export default Main;
