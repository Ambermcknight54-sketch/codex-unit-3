// /* eslint-disable no-unused-vars *//* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/set-state-in-effect */
// // eslint-disable-next-line react-hooks/set-state-in-effect
import { useState, useEffect } from "react";

export function useSecret() {
  const [secretValue, setSecretValue] = useState();
  useEffect(componentDidMount, []);

  return [secretValue, handleSubmit];

  function componentDidMount() {
    const value = sessionStorage.getItem("secretValue");
    setSecretValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.secretValue.value;
    sessionStorage.setItem("secretValue", value);
    setSecretValue(value);
    form.reset();
  }
}
