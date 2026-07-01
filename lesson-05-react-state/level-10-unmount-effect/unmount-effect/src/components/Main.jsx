import { useState, useEffect } from "react";

// 13. Destructure setUnmount from the incoming props object
function Main({ setUnmount }) {
  const [didMount, setDidMount] = useState(false);

  // 25. Debugger above the return statement to trace rendering phases
  debugger;

  // 17. Use effect with componentDidUnmount as callback and empty dependency array
  useEffect(componentDidUnmount, []);

  // 14. Define the callback function above the return statement
  function componentDidUnmount() {
    // 25. Debugger hits when the component prepares its effect setup
    debugger;

    // 15. Return a nameless function to act as the unmount cleanup hook
    return function () {
      // 25. Debugger catches the clean-up execution
      debugger;
      // 16. Alert pops up precisely when the element leaves the DOM
      alert("The Main component has unmounted");
    };
  }

  // 20. Event handler function to trigger parent state change
  function handleClick() {
    // 25. Debugger triggers on click action
    debugger;
    // 21. Turn unmount to true in parent state
    setUnmount(true);
  }

  return (
    <main>
      <p>{"didMount: " + didMount}</p>

      {/* 27 & 28. Message explaining how to run unmount code */}
      <p>
        To track when a component leaves the screen, we make our useEffect
        function return a brand new, nameless function. Because we used empty
        brackets [], React saves this returned function and runs it exactly when
        the component is taken off the page.
      </p>

      {/* 19 & 20. Button element with the click handler attached */}
      <button onClick={handleClick}>Click to unmount</button>
    </main>
  );
}

export default Main;
