function Main() {
  // Step 7: Add a variable let count = 0;
  let count = 0;

  return (
    // Step 8: Add a main tag
    <main>
      {/* Step 8 & 15: Add a button tag that says Click counter and attach handleClick using onClick */}
      <button onClick={handleClick}>Click counter</button>

      {/* Step 9: Add a p tag that renders the value of count */}
      <p>{count}</p>

      {/* Step 10 & 11: Add a p tag with a message explaining stateless variables */}
      <p>
        This counter uses a stateless variable. When you click the button, the
        local variable 'count' increments in memory (which you can see via the
        debugger), but because it is not a state variable (useState), it does
        not trigger a component re-render. If the component ever does re-render,
        the variable resets back to 0.
      </p>
    </main>
  );

  // Step 12: Inside of the Main function and underneath the return statement, create a function called handleClick
  function handleClick(event) {
    // Step 13: Accept an event object and prevent default behavior
    event.preventDefault();

    // Step 14: Add debugger and increment the value of count
    count = count + 1;
  }
}

export default Main;

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
