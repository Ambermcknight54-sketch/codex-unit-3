import { useState } from "react";

function Main() {
  // 8. Add useState to keep track of form values
  const [values, setValues] = useState([]);

  // 24. Breakpoint to watch variable changes during rendering phases
  debugger;

  // 13. Form submission handler function
  function handleSubmit(event) {
    // 24. Breakpoint inside submission handler
    debugger;

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
      {/* 9 & 12. Setup form tag with 3 labels, inputs, name attributes, and a submit button */}
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

      {/* 10. Output tag that renders the stateful values elements */}
      <output>{values}</output>

      {/* 27. Simple explanation p tag */}
      <p>
        When the form is submitted, we grab the input data and put it into an
        array of objects. Then, we use the .map method to loop through that
        array, turn each item into a details tag, and save it to state to show
        on the screen.
      </p>
    </main>
  );
}

// 18 & 19. Callback function outside and under the Main function accepting a formInput object
function toDetails(formInput, index) {
  // 24. Breakpoint inside the loop mapping operation
  debugger;

  // 20 & 21. Construct details tag with dynamic properties from formInput and return it
  const details = (
    <details key={index}>
      <summary>{formInput.label}</summary>
      {formInput.value}
    </details>
  );

  return details;
}

export default Main;
