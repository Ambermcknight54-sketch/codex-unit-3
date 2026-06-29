import { useState, useEffect } from "react";

function Main() {
  const [didMount, setDidMount] = useState(false);

  // Execution pauses here during rendering to let you see the initial state
  debugger;

  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{String(didMount)}</p>
      <p>
        The useEffect function runs code at specific times. By passing an empty
        array at the end, we tell React to run our function exactly once, right
        after the component first appears on the screen.
      </p>
    </main>
  );
}

function componentDidMount() {
  // Execution pauses here after the component mounts to the screen
  debugger;

  setDidMount(true);
}

export default Main;
