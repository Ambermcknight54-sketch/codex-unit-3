/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
// eslint-disable-next-line react-hooks/set-state-in-effect
import { useState, useEffect } from "react";

export function Main() {
  // Creating state using array destructuring
  const [apiKey, setApiKey] = useState("");
  // Track the mount phase with useEffect
  useEffect(function componentDidMount() {
    // Get the apiKey from sessionStorage
    const savedKey = sessionStorage.getItem("apiKey");

    // If a saved key exists, restore it to state
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []); // Empty array of dependencies so it only runs on mount
  //  function for handling form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted API Key:", apiKey);
  }

  // function for updating state on input change
  function handleInputChange(event) {
    setApiKey(event.target.value);
  }

  return (
    <main>
      {/* Setup form tag with labels, input, name attribute, and a submit button */}
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input
            type="password"
            name="apiKey"
            value={apiKey}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit"> Submit </button>
      </form>

      {/* Output tag below the form rendering the apiKey */}
      <output>{apiKey}</output>
    </main>
  );
}
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const value = form.apiKey.value;

  sessionStorage.setItem("apiKey", value);
  setApiKey(value);
  console.log("Saved API Key:", value);
}

export default Main;
