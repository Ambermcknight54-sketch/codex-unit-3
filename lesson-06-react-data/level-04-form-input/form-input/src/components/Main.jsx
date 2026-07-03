import { useState } from "react";

function Main() {
  // 8. Add useState to keep track of form values
  const [values, setValues] = useState([]);

  // 24. Breakpoint to watch variable changes during rendering phases
  // debugger;

  // 13. Form submission handler function
  function handleSubmit(event) {
    // debugger;
    event.preventDefault();
    const form = event.target;

    // 15 & 16. Build an array of objects representing values from the form elements
    const formInputs = {
      user: {
        username: form.elements.username.value,
        email: form.elements.email.value,
      },
      role: form.elements.role.value,
    };

    // 17 & 22. Map through inputs using the callback function and update state
    const details = formInputs.map(toDetails);
    setValues(details);
  }

  return (
    <main>
      {/* 9 & 12. Setup form tag with 3 labels, inputs, name attributes, and a submit button */}
      <form onSubmit={handleSubmit}>
        <figure>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <figcaption>Please enter your unique profile name.</figcaption>
        </figure>

        <figure>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <figcaption>We will use this address for account updates.</figcaption>
        </figure>

        <figure>
          <label>
            Job Role:
            <input type="text" name="role" />
          </label>
          <figcaption>Specify your current professional title.</figcaption>
        </figure>
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
function toDetails(formInput) {
  // debugger;

  // 20 & 21. Construct details tag with dynamic properties from formInput and return it
  const details = (
    <details>
      <summary>{formInput.label}</summary>
      {formInput.value}
    </details>
  );

  return details;
}

export default Main;
