/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
// eslint-disable-next-line react-hooks/set-state-in-effect
import React from "react";
import { useSecret } from "../hooks/useSecret";

export function Main() {
  // Pass the target input name / sessionStorage key as an argument
  const [secretValue, handleSubmit] = useSecret("mySecretToken");

  return (
    <main>
      <p>
        To save a secret value, the form's onSubmit handler intercepts the
        submission event, prevents the default browser refresh, retrieves the
        input's value, and saves it to sessionStorage while also updating our
        hook's state. To restore the secret when the component mounts, we use
        the useEffect hook inside our custom useSecret hook.
      </p>

      {/* Setup form tag with labels, input, name attribute, and a submit button */}
      <form onSubmit={handleSubmit}>
        <label>
          Secret Key:
          <input
            type="password"
            name="mySecretToken" // Must match the argument passed to useSecret
            defaultValue={secretValue} // Allows user typing while holding stored state
            required
          />
        </label>
        <br />
        <button type="submit"> Submit </button>
      </form>

      {/* Output tag below the form rendering the secretValue */}
      <output>{secretValue}</output>
    </main>
  );
}
