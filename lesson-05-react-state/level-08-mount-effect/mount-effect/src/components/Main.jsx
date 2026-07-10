import { useState, useEffect } from "react";

function Main() {
  const [didMount, setDidMount] = useState(false);
  // debugger;
  useEffect(componentDidMount, []);
  // 13. Changing the switch from false to true
  function componentDidMount() {
    //  debugger;
    setDidMount(true);
  }
  return (
    <main>
      /* 11. This shows the true/false value on your screen */
      <p>{didMount ? "true" : "false"}</p>
      <p>
        The useEffect tool is like a special timer. When you put empty square
        brackets at the very end of it, you are telling React to run your code
        exactly one time, right when the component first pops up onto your
        screen. It is super useful for setting things up at the very start!
      </p>
    </main>
  );
}

export default Main;
