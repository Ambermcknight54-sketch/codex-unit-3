import { useState } from "react";

function Main() {
  // Tasks 7-9: Destructure the array from useState
  const [count, setCount] = useState(0);

  function handleClick(event) {
    debugger;
    event.preventDefault();
    setCount(count + 1);
  }

  // Task 10: Debugger statement to inspect count and setCount on initial render
  debugger;

  return (
    <main>
      <button onClick={handleClick}> Click Counter </button>
      <p>{count}</p>
      <p>
        The useState function returns an array containing a stateful variable and its setter function. Using array destructuring allows you to unpack both values on a single line and give them distinct names like count and setCount.
      </p>
    </main>
  );
}

export default Main;
