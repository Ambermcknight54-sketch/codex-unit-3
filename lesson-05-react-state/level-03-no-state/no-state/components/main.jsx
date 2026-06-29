function Main() {
  let count = 0;
  const message =
    "Stateless variables do not trigger a component re-render when changed. When the button is clicked, the variable updates in memory (which you can track in the debugger), but the UI display remains at 0 because React doesn't know it needs to redraw the component.";

  function handleClick(event) {
    event.preventDefault();

    // Execution pauses here in the browser debugger on each click
    debugger;

    count = count + 1;
  }

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>{message}</p>
    </main>
  );
}

export default Main;
