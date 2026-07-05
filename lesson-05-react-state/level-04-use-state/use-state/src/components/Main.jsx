import { useState } from "react";

function Main() {
  const results = useState(0);
  let count = results[0];
  let setcount = results[1];

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
        This counter uses a stateless variable. When clicked, the local variable
        increments in memory (visible via the debugger), but the page won't
        update because stateless variables don't trigger a re-render.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    setcount(count + 1);
  }
}

export default Main;
