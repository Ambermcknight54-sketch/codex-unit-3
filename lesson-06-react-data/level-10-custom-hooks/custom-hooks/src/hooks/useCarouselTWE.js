import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";

/**
 * Custom hook to initialize the TW Elements Collapse component.
 */
export function useCollapseTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Collapse });
  }
}
// import { useState, useEffect } from "react";
// import { Collapse, initTWE } from "tw-elements";

// /**
//  * Custom hook to manage navigation state and initialize TW Elements Collapse.
//  */
// export function useCollapseTWE() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(componentDidMount, []);

//   function componentDidMount() {
//     initTWE({ Collapse });
//   }

//   return { isOpen, setIsOpen };
// }
