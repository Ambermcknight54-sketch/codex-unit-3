import { useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
        In React, components are functions, but normal functions forget their
        data after they run. A stateful variable acts like a memory chip that
        preserves its value between function calls. When you click the button,
        the setter function updates this value, which tells React to clear the
        old view and re-render the page with the brand new count.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }
}

// import { useState } from "react";

// export function Main() {
//   const [count, setCount] = useState(0);
//   return (
//     <main>
//       <p>{count}</p>
//       <button onClick={handleClick}>Click counter</button>
//       <p>
//         Using useState with array destructuring lets you unpack the state
//         variable and its setter function onto a single line of code.
//       </p>
//     </main>
//   );

//   function handleClick(event) {
//     event.preventDefault();
//     setCount(count + 1);
//   }
// }
