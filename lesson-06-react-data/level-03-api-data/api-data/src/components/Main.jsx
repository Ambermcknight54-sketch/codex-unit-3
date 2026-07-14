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
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  async function handleData() {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const result = await response.json();
    const details = result.map(toCharacters);
    setCharacters(details);
  }
  function toCharacters(dataItem) {
    return (
      <details>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img src={dataItem.image} />
          <figcaption>{dataItem.interpretedBy}</figcaption>
        </figure>
      </details>
    );
  }
}
export default Main;
