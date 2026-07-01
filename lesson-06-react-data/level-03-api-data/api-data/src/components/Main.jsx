import { useState, useEffect } from "react";

function Main() {
  // Stateful variable to hold the final character details elements
  const [characters, setCharacters] = useState([]);

  // State to track the mount phase
  const [didMount, setDidMount] = useState(false);

  // Breakpoint to watch variables change during execution
  debugger;

  // Track the mount phase
  useEffect(componentDidMount, []);

  // Callback function for the mount phase
  function componentDidMount() {
    debugger;
    setDidMount(true);

    // Call our async data handler
    handleData();
  }

  // Asynchronous function to fetch and process API data
  async function handleData() {
    // 1. Fetch data from the API
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );

    // 2. Parse the response into a usable array of objects
    const data = await response.json();

    // 3. Use the dot method (.map) with a standard inline function to transform the data
    const details = data.map(function (dataItem, index) {
      // Breakpoint inside the loop to inspect each API character object
      debugger;

      return (
        <details key={index}>
          <summary>{dataItem.character}</summary>
          <figure>
            <img src={dataItem.image} alt={dataItem.character} />
            <figcaption>{dataItem.actor}</figcaption>
          </figure>
        </details>
      );
    });

    // 4. Save the final collection of React elements to state
    setCharacters(details);
  }

  return (
    <main>
      {/* Render the value of didMount */}
      <p>{"didMount: " + didMount}</p>

      {/* Render the character details blocks */}
      <section>{characters}</section>

      {/* Explanation of how map works with API data */}
      <p>
        To render data from an API, we fetch the array of information when the
        component first mounts. Once we have the data, we use standard dot
        notation to call the .map method, writing a regular function directly
        inside it to loop through each character and output organized HTML
        elements to the page.
      </p>
    </main>
  );
}

export default Main;
