import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>
        A normal functions forget everything once they finish running. A
        stateful variable is special because it acts like a memory chip—it lets
        your component remember information even after it runs.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
}
