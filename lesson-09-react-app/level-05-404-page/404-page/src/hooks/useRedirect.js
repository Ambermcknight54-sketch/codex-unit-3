import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export function useRedirect(url, milliseconds) {
  const navigateTo = useNavigate();
  const [timerId, setTimerId] = useState();

  useEffect(function componentDidMount() {
    if (milliseconds) {
      const id = setTimeout(handleRedirect, milliseconds);
      setTimerId(id);
    }
  });

  function handleRedirect() {
    clearTimeout(timerId);
    navigateTo(url);
  }

  return handleRedirect;
}
