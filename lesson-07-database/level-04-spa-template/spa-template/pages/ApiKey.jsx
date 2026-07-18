// import { useInputTWE } from "../hooks/useInputTWE";
import { useSecret } from "../hooks/useSecret";

export function ApiKey() {
  const [secretValue, handleSubmit] = useSecret("ssssecretValueeee");

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input type="password" name="ssssecretValueeee" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <output>{secretValue}</output>
    </main>
  );
}
