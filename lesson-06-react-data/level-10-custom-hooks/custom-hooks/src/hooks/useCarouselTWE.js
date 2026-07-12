import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";

/**
 * Custom hook to initialize the TW Elements Collapse component.
 */
export function useCollapseTWE() {
  useEffect(componentDidMount, []);
}
function componentDidMount() {
  initTWE({ Collapse });
}
