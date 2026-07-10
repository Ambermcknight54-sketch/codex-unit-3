export function Main() {
  return (
    <main>
      <p>
        To create a custom hook, define a JavaScript function whose name starts
        with the prefix "use"(which allows React to automatically check for Hook
        rules) and move your useState, useEffect, or other hook patterns inside
        it. To use your custom hook, simply import it into your functional
        component and call it like a regular function at the top level, allowing
        you to abstract complex lifecycle behavior and keep your rendering
        components.
      </p>
    </main>
  );
}
