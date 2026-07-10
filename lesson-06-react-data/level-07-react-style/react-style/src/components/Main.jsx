import { Slides } from "./Slides";

export default function Main() {
  return (
    <main>
      <h2>React Style</h2>
      <p>
        To render TW Elements interactive components correctly in React, replace
        class with className, wrapping styles into objects, and converting
        properties like stroke-width to camelCase. The elements rely on
        underlying JavaScript behavior, the initTWE function must be imported
        alongside the component module and executed during the component's mount
        phase using the useEffect hook with an empty dependency array.
      </p>
      <Slides />
    </main>
  );
}
