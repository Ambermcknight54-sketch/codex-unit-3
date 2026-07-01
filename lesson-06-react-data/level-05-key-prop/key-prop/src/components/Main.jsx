import { useState } from "react";

function Main() {
  // 8. Track the form values in a stateful array
  const [values, setValues] = useState([]);

  // 18. Breakpoint to inspect state and rendering phases
  // debugger;

  // 13. Form submission handler function
  function handleSubmit(event) {
    // 18. Breakpoint inside the submission handler
    // debugger;

    // 13. Prevent standard page refresh behavior
    event.preventDefault();

    // 14. Access the form element from the event target
    const form = event.target;

    // 15 & 16. Build an array of objects representing values from the form elements
    const formInputs = [
      { label: "Username", value: form.elements.username.value },
      { label: "Email", value: form.elements.email.value },
      { label: "Role", value: form.elements.role.value },
    ];

    // 17 & 22. Map through inputs using the callback function and update state
    const details = formInputs.map(toDetails);
    setValues(details);
  }

  return (
    <main>
      {/* 9 & 12. Form configuration with labels, inputs, and submission link */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" required />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="role">Job Role: </label>
          <input type="text" id="role" name="role" required />
        </div>

        <button type="submit">Submit Details</button>
      </form>

      {/* 10. Output container rendering the stateful elements array */}
      <output>{values}</output>

      {/* 21. Explanation paragraph regarding keys and the index parameter */}
      <p>
        The key prop is a unique identifier React uses behind the scenes to keep
        track of items in a list. By adding index as the second parameter to our
        toDetails function, we can combine the loop's position number with the
        form label to create a completely unique key for each element.
      </p>
    </main>
  );
}

// 12. Callback function positioned under Main, accepting formInput and the loop index
function toDetails(formInput, index) {
  // 18. Breakpoint to monitor the mapping loop and check individual item data
  // debugger;

  // 13. Construct a completely unique key identifier string
  const key = index + formInput.label;

  // 14, 19 & 20. Produce the structural details tag populated with a summary
  const details = (
    <details key={key}>
      <summary>{formInput.label}</summary>
      {formInput.value}
    </details>
  );

  // 21. Return the finished React element to the map array collector
  return details;
}

export default Main;

// import
//  { useState } from "react";

// function Main() {
//   const [values, setValues] = useState([]);

//   // 18. Breakpoint inside Main to trace rendering
//   // debugger;

//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;

//     const formInputs = [
//       { label: "Username", value: form.elements.username.value },
//       { label: "Email", value: form.elements.email.value },
//       { label: "Role", value: form.elements.role.value }
//     ];

//     const details = formInputs.map(toDetails);
//     setValues(details);
//   }

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input type="text" id="username" name="username" required />
//         </div>

//         <div>
//           <label htmlFor="email">Email: </label>
//           <input type="email" id="email" name="email" required />
//         </div>

//         <div>
//           <label htmlFor="role">Job Role: </label>
//           <input type="text" id="role" name="role" required />
//         </div>

//         <button type="submit">Submit Details</button>
//       </form>

//       <output>
//         {values}
//       </output>

//       {/* 21. Simple explanation p tag explaining key and index */}
//       <p>
//         The key prop is a unique identifier that React uses internally to keep track of elements in an array.
//         By adding a second parameter named index to our toDetails function, we can combine the item's loop
//         number with its label to create a completely unique ID for every single tag.
//       </p>
//     </main>
//   );
// }

// // 12. Add a second parameter - index - to the toDetails function
// function toDetails(formInput, index) {
//   // 18. Breakpoint inside toDetails to inspect the key and values arrays
//   // debugger;

//   // 13. Create a unique key string combining the index and form label
//   const key = index + formInput.label;

//   // 14. Attach the invisible key attribute directly onto the details tag
//   const details = (
//     <details key={key}>
//       <summary>{formInput.label}</summary>
//       {formInput.value}
//     </details>
//   );

//   return details;
// }

// export default Main;
