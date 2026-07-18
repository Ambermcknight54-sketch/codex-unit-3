// src/hooks/useSecret.js
import { useState } from "react";

export function useSecret(key, initialValue = "") {
  // 1. Get the initial value from sessionStorage if it exists
  const [secret, setSecret] = useState(
    sessionStorage.getItem(key) || initialValue,
  );

  // 2. Standard function declaration that sets state and updates storage
  function saveSecret(newValue) {
    setSecret(newValue);
    sessionStorage.setItem(key, newValue);
  }

  // 3. Return the state value and the function to change it
  return [secret, saveSecret];
}
