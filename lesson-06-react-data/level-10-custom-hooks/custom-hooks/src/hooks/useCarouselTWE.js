import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";

/**
 * Custom hook to initialize the TW Elements Carousel component.
 */
export function useCarouselTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Carousel });
  }
}
