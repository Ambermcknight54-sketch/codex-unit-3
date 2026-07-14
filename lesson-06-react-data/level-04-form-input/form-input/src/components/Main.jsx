import { useState } from "react";

export function Main() {
  // 8. Track the form values in a stateful array
  const [values, setValues] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    //  Build an array of objects representing values from the form elements
    const formInputs = {
      user: {
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      },
    };
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

      <p>
        When the form is submitted, we grab the input data and put it into an
        array of objects. Then, we use the .map method to loop through that
        array, turn each item into a details tag, and save it to state to show
        on the screen.
      </p>
    </main>
  );
}

function toDetails(formInput) {
  const details = (
    <details>
      <summary>{formInput.label}</summary>
      {formInput.value}
    </details>
  );

  return details;
}

export default Main;
