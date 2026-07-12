import { useState, useEffect } from "react";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);
  return (
    <main>
      /* 11. This shows the true/false value on your screen */
      <p>{didMount ? "true" : "false"}</p>
      <p>TOO DO EXPLAIN useEffect</p>
    </main>
  );
  function componentDidMount() {
    setDidMount(true);
  }
}
