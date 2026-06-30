import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  debugger;

  const handleClick = (event) => {
    event.preventDefault();
    debugger;
    setCount(count + 1);

    // Execution pauses here in the browser debugger on each click
    debugger;
  }

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
        The useState function returns an array with a state variable and a setter function. Array destructuring lets you unpack both of these values into separate variables on a single line of code.
      </p>
    </main>
  );
}

export default Main;

import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  debugger;

  const handleClick = (event) => {
    event.preventDefault();
    debugger;
    setCount(count + 1);
  };

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      
      {/* Clean, paragraph-formatted explanation */}
      <p>
        The useState function returns an array with a state variable and a setter function. Array destructuring lets you unpack both of these values into separate variables on a single line of code.
      </p>
    </main>
  );
}

export default Main;