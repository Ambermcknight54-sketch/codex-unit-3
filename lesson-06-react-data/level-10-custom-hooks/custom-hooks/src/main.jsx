import { useEffect, useState } from "react";

export function main() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);
  return (
    <main>
      <p> {"didMount:" + didMount} </p>
      <p>
        useEffect is a React Hook that lets you synchronize a component with an
        external system. It lets you run side-effects (like fetching data,
        manually changing the DOM, setting up subscriptions, or logging) in
        response to changes in your component. A useEffect hook takes two
        arguments: A callback function: The code you want to run. A dependency
        array: A list of variables that tells React exactly when to re-run the
        code.
      </p>
    </main>
  );
  function componentDidMount() {
    setDidMount(true);
  }
}
