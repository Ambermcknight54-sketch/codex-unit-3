import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export function useRedirect(url, milliseconds) {
  debugger;
  const navigateTo = useNavigate();
  const [timerId, setTimerId] = useState();

  useEffect(function componentDidMount() {
    debugger;
    if (milliseconds) {
      const id = setTimeout(handleRedirect, milliseconds);
      setTimerId(id);
    }
  }, []);

  function handleRedirect() {
    debugger;
    clearTimeout(timerId);
    navigateTo(url);
  }

  return handleRedirect;
}
