import { useState } from "react";

export function useControlledInput() {
  const [value, setValue] = useState();

  return [value, handleChange];

  function handleChange(event) {
    const input = event.target;
    const newValue = input.value;
    setValue(newValue);
  }
}
