function Main() {
  let count = 0;

  return (
    <main>
      {/* Step 15: Attach handleClick using onClick */}
      <button onClick={handleClick}>Click counter</button>

      {/* Step 9 & 10 */}
      <p>{count}</p>
      <p>
        This counter uses a stateless variable. When clicked, the local variable
        increments in memory (visible via the debugger), but the page won't
        update because stateless variables don't trigger a re-render.
      </p>
    </main>
  );

  // Step 12: Created inside Main, but underneath the return statement
  // Using a function declaration allows JavaScript hoisting to make it work!
  function handleClick(event) {
    event.preventDefault();
    count = count + 1;
  }
}

export default Main;
