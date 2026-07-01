import { useState, useEffect } from "react";

function Main() {
  const [didMount, setDidMount] = useState(false);

  // 10. This pops up the debugger so you can check things out!
  debugger;

  // 15 & 16. This calls useEffect with your function and the empty brackets []
  useEffect(componentDidMount, []);

  // 12. We put this function right here so JavaScript can find it
  function componentDidMount() {
    // 14. Another pause button for the debugger!
    debugger;

    // 13. Changing the switch from false to true
    setDidMount(true);
  }

  return (
    <main>
      /* 11. This shows the true/false value on your screen */
      <p>{didMount ? "true" : "false"}</p>
      /* 24 & 25. simple paragraph explanation */
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
