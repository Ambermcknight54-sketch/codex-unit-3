import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, MOUNT_PHASE);
  return (
    <main>
      <p>Move id=root to the body tag. Delete the empty div tag to the head.</p>
    </main>
  );
  function componentDidMount() {
    setDidMount(true);
  }
}
