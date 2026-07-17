/* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable no-unused-vars *//* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/set-state-in-effect */
// // eslint-disable-next-line react-hooks/set-state-in-effect
import { useState, useEffect } from "react";

export function useSecret(secretKey) {
  const [secretValue, setSecretValue] = useState("");

  // Track the mount phase to restore the secretValue from sessionStorage
  useEffect(
    function componentDidMount() {
      const savedValue = sessionStorage.getItem(secretKey);
      if (savedValue) {
        setSecretValue(savedValue);
      }
    },
    [secretKey],
  ); // Re-run if secretKey changes

  // Dynamic form submit handler
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    // Use bracket notation to dynamically grab the input value by its name/id key
    const value = form.elements[secretKey].value;

    sessionStorage.setItem(secretKey, value);
    setSecretValue(value);
    console.log(`Saved ${secretKey}:`, value);
  }

  // Return the value and the handler as an array
  return [secretValue, handleSubmit];
}
