import { useState, useEffect } from "react";

function Main() {
  const [characters, setCharacters] = useState([]);

  // Fetch initial characters when the component mounts
  useEffect(() => {
    async function handleData() {
      try {
        const response = await fetch(
          "https://potterapi-fedeperin.vercel.app/en/characters",
        );
        const results = await response.json();
        const details = results.map(toCharacters);
        setCharacters(details);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    }
    handleData();
  }, []);

  // 16. Create the handleSubmit function under handleData
  async function handleSubmit(event) {
    // 25. Place a debugger breakpoint at the beginning of handleSubmit
    // debugger;

    // 18. Accept the event object and prevent default form behavior
    event.preventDefault();

    // 19. Capture the form element
    const form = event.target;

    // 20. Build the data object using the key expected by the API
    const data = {
      limit: form.elements.max.value,
    };

    // 21. Use URLSearchParams to create a dataString query string
    const dataString = new URLSearchParams(data).toString();

    try {
      // 22. Fetch from the API and include the dataString as query parameters
      const response = await fetch(
        `https://potterapi-fedeperin.vercel.app/en/characters?${dataString}`,
      );

      // 23. Parse the response into results, map them, and update the state array
      const results = await response.json();
      const details = results.map(toCharacters);
      setCharacters(details);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  }

  return (
    <main>
      {/* 14 & 15. Form layout specifying the max number of characters to fetch */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="max">Max Characters: </label>
          <input type="number" id="max" name="max" min="1" required />
        </div>
        <button type="submit">Fetch Characters</button>
      </form>

      {/* Render the element array saved in characters state */}
      <output>{characters}</output>

      {/* 28. Paragraph explaining the input submission and render process */}
      <p>
        To change API data with user input, we capture the values from form
        submission inputs, wrap them inside a data object, and pass that object
        into URLSearchParams to generate a clean query string. This data string
        is appended directly onto the API fetch URL following a question mark,
        allowing the server to return a filtered array of results that we loop
        through and render on the screen.
      </p>
    </main>
  );
}

// 10. Add index as the second parameter to the callback function
function toCharacters(dataItem, index) {
  // 11. Create a unique key tracking loop position combined with character name
  const key = index + dataItem.fullName;

  // 12. Apply the invisible tracking key attribute to the details element
  return (
    <details key={key}>
      <summary>{dataItem.fullName}</summary>
      <p>House: {dataItem.hogwartsHouse}</p>
      <p>Actor: {dataItem.interpretedBy}</p>
    </details>
  );
}

export default Main;
