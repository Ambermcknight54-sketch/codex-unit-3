import { useEffect } from "react";
import { Input, Ripple, initTWE } from "tw-elements";

export function useInputTWE() {
  useEffect(componentDiDMount, []);

  function componentDiDMount() {
    initTWE({ Input, Ripple });
  }
}
