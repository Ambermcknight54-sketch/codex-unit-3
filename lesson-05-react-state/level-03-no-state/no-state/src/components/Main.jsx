import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>

      {/* Clean, paragraph-formatted explanation */}
      <p>
        The useState function returns an array with a state variable and a
        setter function. Array destructuring lets you unpack both of these
        values into separate variables on a single line of code.
      </p>
    </main>
  );
}

export default Main;

// function Main() {
//   // Step 7: Define the stateless variable
//   let count = 0;

//   // Step 12 & 13: Define handleClick (placed above return to prevent unreachable code errors)
//   function handleClick(event) {
//     event.preventDefault(); // Step 13: Prevent default behavior

//     count = count + 1; // Step 14: Increment the variable
//   }

//   return (
//     <main>
//       .{/* Step 8 & 15: Button with exact text and handler attached */}
//       <button onClick={handleClick}>onClickClick</button>
//       {/* Step 9: Render the value of count */}
//       <p>{count}</p>
//       {/* Step 10 & 11: Explanation message */}
//       <p>
//         Stateless variables are standard local JavaScript variables. They do not
//         preserve their values across component rendering blocks. When you click
//         the button, the handler increments the count variable in local memory,
//         but because it is not part of React state, it will reset back to 0 every
//         time the component runs.
//       </p>
//     </main>
//   );
// }

// export default Main;

// import { useState } from "react";

// function Main() {
//   const [count, setCount] = useState(0);

//   const handleClick = (event) => {
//     event.preventDefault();
//     setCount(count + 1);
//   };

//   return (
//     <main>
//       <button onClick={handleClick}>Click counter</button>
//       <p>{count}</p>

//       {/* Clean, paragraph-formatted explanation */}
//       <p>
//         The useState function returns an array with a state variable and a
//         setter function. Array destructuring lets you unpack both of these
//         values into separate variables on a single line of code.
//       </p>
//     </main>
//   );
// }

// export default Main;
