import { useEffect, useState } from "react";

export function useSecret() {
  const [secretValue, setSecretValue] = useState();
  useEffect(componentDiDMount, []);

  return [secretValue, handleSubmit];

  function componentDiDMount() {
    const value = sessionStorage.getItem("secretValue");
    setSecretValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretValue].value;
    sessionStorage.setItem("secretValue", value);
    setSecretValue(value);
    form.reset;
  }
}
