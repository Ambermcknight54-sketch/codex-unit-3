import { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const [didMount, setDidmount] = useState();
  useEffect(componentDidmount, []);
  return (
    <main>
      <p> Explain</p>
    </main>
  );
  function componentDidmount() {
    setDidmount(true);
  }
}
