import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);
  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>
        useState is like a label and a button. The count variable is the label
        that shows a number. The setCount function is the button that changes
        that number. Use array brackets on the left side. 'Event.preventDefault'
        stops the page from reloading";
      </p>
    </main>
  );
}

export default Main;
