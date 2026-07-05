import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>
        Using useState with array destructuring lets you unpack the state
        variable and its setter function onto a single line of code.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
}
