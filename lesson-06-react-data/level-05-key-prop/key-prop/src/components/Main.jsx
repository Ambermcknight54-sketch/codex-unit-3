import { useState } from "react";

function Main() {
  // 8. Track the form values in a stateful array
  const [values, setValues] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    // Build an array of objects representing values from the form elements
    const formInputs = {
      user: {
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      },
    };

    // 17 & 22. Map through inputs using the callback function and update state
    const details = formInputs.map(toDetails);
    setValues(details);
  }

  return (
    <main>
      {/* 9 & 12. Setup form tag with 3 labels, inputs, name attributes, and a submit button */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <br />
        <button type="submit"> Submit </button>
      </form>
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
