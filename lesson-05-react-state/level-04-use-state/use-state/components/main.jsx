import { useState } from "react";

function Main() {
  const results = useState(0);

  // Execution pauses here during rendering to let you inspect the 2-item array
  debugger;

  const count = results[0];
  const setCount = results[1];

  const message =
    "Unlike standard local variables, stateful variables managed by 'useState' preserve their values across component rendering cycles. When you invoke the setter function, React updates the underlying value in memory and automatically triggers a re-render to redraw the user interface with the fresh value.";

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
      <p>{message}</p>
    </main>
  );
}

export default Main;
