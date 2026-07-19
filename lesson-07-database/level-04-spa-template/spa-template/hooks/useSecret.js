import { useSecret } from "../hooks/useSecret";

export function useSecret(secretKey) {
  const [secretValue, setSecretValue] = useState();

  return [secretValue, handleSubmit];

  function componentDiDMount() {
    const value = sessionStorage.getItem("secretKey");
    setSecretValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretValue].value;
    sessionStorage.setItem("secretKey", value);
    setSecretValue(value);
  }
}
