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
        To preserve your session, the API key is saved to local storage using a
        submission handler function, allowing it to be automatically retrieved
        and restored whenever the component mounts.
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
