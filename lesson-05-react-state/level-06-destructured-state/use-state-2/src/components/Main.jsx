import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  // Execution pauses here during rendering to let you inspect count and setCount
  // debugger;

  function handleClick(event) {
    event.preventDefault();
    // Execution pauses here on each click before updating the layout state
    // debugger;

    setCount(count + 1);
  }

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
        Using useState with array destructuring lets you unpack the state
        variable and its setter function onto a single line of code. setCount.
      </p>
    </main>
  );
}

export default Main;
