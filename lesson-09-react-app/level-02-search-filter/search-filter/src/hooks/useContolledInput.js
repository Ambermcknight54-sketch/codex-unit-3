import { useState } from "react";

export function useControlledInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  return [value, handleChange];

  function handleChange(event) {
    const input = event.target;
    const inputValue = input.value;
    setValue(inputValue);
  }
}
