import { useState, useEffect } from "react";

function Main() {
  // 7. Mount phase state
  const [didMount, setDidMount] = useState(false);

  // 9. Update phase state
  const [didUpdate, setDidUpdate] = useState(false);

  // 10. Message state
  const [message, setMessage] = useState("The Main component hasn't updated.");

  // 22. Debugger above the return statement to catch re-renders
  debugger;

  // 7. Triggers componentDidMount on initial mount phase
  useEffect(componentDidMount, []);

  // 15. Triggers componentDidUpdate whenever didMount or message changes
  useEffect(componentDidUpdate, [didMount, message]);

  // 7. Callback function for the mount phase
  function componentDidMount() {
    // 22. Debugger inside mount phase
    debugger;
    setDidMount(true);
  }

  // 12. Callback function for the update phase
  function componentDidUpdate() {
    // 22. Debugger inside update phase
    debugger;

    // 13. Only run tracking code if the component is already mounted
    if (didMount === true) {
      // 14. Turn the update switch to true
      setDidUpdate(true);
    }
  }

  // 18. Click event handler function
  function handleClick() {
    // 22. Debugger inside click handler
    debugger;

    // 19. Change the message state value
    setMessage("The Main component has updated.");
  }

  return (
    <main>
      {/* 7 & 11. Render stateful variables */}
      <p>{"didMount: " + didMount}</p>
      <p>{"didUpdate: " + didUpdate}</p>
      <p>{message}</p>

      {/* 17 & 18. Button to trigger the click handler */}
      <button onClick={handleClick}>Click to update</button>

      {/* 24. Plain explanation of the update phase and the 'if' condition */}
      <p>
        To track when a component updates, we pass specific variables into the
        useEffect dependency array so it runs whenever those values change.
        Because useEffect automatically runs once when the component first loads
        (mounts), we must use an if condition to check if didMount is true. This
        prevents our update logic from accidentally running too early before any
        actual user updates happen.
      </p>
    </main>
  );
}

export default Main;
