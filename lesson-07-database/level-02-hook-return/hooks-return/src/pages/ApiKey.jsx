// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/set-state-in-effect */
// // eslint-disable-next-line react-hooks/set-state-in-effect
import { useSecret } from "../hooks/useSecret";

export function ApiKey() {
  const [secretValue, handleSubmit] = useSecret();

  return (
    <main>
      <p>
        Custom hooks receive values as arguments (like useBooksApi(5)) and give
        values back using a return statement, typically returning an array or an
        object containing state variables and handler functions. When working
        with objects in JavaScript, bracket notation (object[key]) allows you to
        access or set properties using variables (e.g.,
        form.elements[fieldName]), handle property names with spaces or hyphens,
        or compute property keys, which isn't possible with standard dot
        notation.
      </p>
      {/* Setup form tag with labels, input, name attribute, and a submit button */}
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input type="password" name="secretValue" />
        </label>
        <br />
        <button> Submit </button>
      </form>

      {/* Output tag below the form rendering the apiKey */}
      <output>{secretValue}</output>
    </main>
  );
}
