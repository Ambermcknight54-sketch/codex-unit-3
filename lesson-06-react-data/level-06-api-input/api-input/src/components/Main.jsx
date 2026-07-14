/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export function Main() {
  const [characters, setCharacters] = useState([]);
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{characters}</section>
      <p>
        To render data from an API, we fetch the array of information when the
        component first mounts. Once we have the data, we use standard dot
        notation to call the .map method, writing a regular function directly
        inside it to loop through each character and output organized HTML
        elements to the page.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Max Characters:
          <input type="number" name="max" />
        </label>

        {/* Added Input 1: Search Name */}
        {/* <label>
          Search Name:
          <input type="text" name="search" />
        </label> */}

        {/* Added Input 2: House */}
        {/* <label>
          House:
          <input type="text" name="house" />
        </label> */}

        <button type="submit">Characters</button>
      </form>
    </main>
  );

  // Fetch initial characters when the component mounts
  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

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

  // Create the handleSubmit function under handleData
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    // Ensured form.elements.max matches the input name="max"
    const data = {
      max: form.elements.max.value,
      // search: form.elements.search.value,
      // house: form.elements.house.value,
    };

    const dataString = new URLSearchParams(data).toString();
    try {
      const response = await fetch(
        `https://potterapi-fedeperin.vercel.app/en/characters?${dataString}`,
      );
      const results = await response.json();
      const details = results.map(toCharacters);
      setCharacters(details);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  }

  function toCharacters(dataItem, index) {
    const key = index + dataItem.fullName;
    return (
      <details key={key}>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img src={dataItem.image} />
          <figcaption>{dataItem.interpretedBy || dataItem.actor}</figcaption>
        </figure>
      </details>
    );
  }
}

export default Main;
