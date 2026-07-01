import { useState, useEffect } from "react";

function Main() {
  // 8 & 9. Stateful variable to contain characters from Harry Potter (initialized as an empty array)
  const [characters, setCharacters] = useState([]);

  // 12. State to track the mount phase
  const [didMount, setDidMount] = useState(false);

  // 31. Breakpoint to inspect state changes during execution
  debugger;

  // 12. Setup the component to track the mount phase
  useEffect(componentDidMount, []);

  // 12. Callback function for the mount phase
  function componentDidMount() {
    // 31. Breakpoint inside the mount execution block
    debugger;
    setDidMount(true);

    // 14. Call the handleData function
    handleData();
  }

  // 15. handleData function configured with async/await to handle the api promise
  async function handleData() {
    // 17. Fetch data from the Harry Potter API
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );

    // 18. Parse the API response and store the character array
    const data = await response.json();

    // 19. Map the data to React elements using toCharacters as the callback
    const details = data.map(toCharacters);

    // 20. Update state with the newly created elements array
    setCharacters(details);
  }

  return (
    <main>
      {/* 12. Render the value of didMount */}
      <p>{"didMount: " + didMount}</p>

      {/* 10. Render the characters variable inside a section tag */}
      <section>{characters}</section>

      {/* 34. Explanation p tag */}
      <p>
        To render data from an API, we use an asynchronous fetch request inside
        our mount phase. Once the network promise resolves, we pass the raw data
        array to the map method, converting each character object into
        structured HTML blocks before saving them to state so React can
        dynamically output them.
      </p>
    </main>
  );
}

// 21. Create the toCharacters callback function outside and under the Main function
// 23. Receive dataItem object from the API array map
function toCharacters(dataItem, index) {
  // 24. Breakpoint to inspect incoming data properties (character, image, actor, etc.)
  debugger;

  // 25, 26, 27 & 28. Construct details tag with summary, figure, img, and figcaption
  const details = (
    <details key={index}>
      <summary>{dataItem.character}</summary>
      <figure>
        <img src={dataItem.image} alt={dataItem.character} />
        <figcaption>{dataItem.actor}</figcaption>
      </figure>
    </details>
  );

  // 29. Return the details object to populate the map array output
  return details;
}

export default Main;
