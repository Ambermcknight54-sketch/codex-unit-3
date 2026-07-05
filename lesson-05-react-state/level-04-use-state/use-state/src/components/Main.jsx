import { useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>
        A normal function forgets everything once it finishes running. A
        stateful variable is special because it acts like a memory chip—it lets
        your component remember information even after it runs.
      </p>
    </main>
  );
}
