import { useEffect, useState } from "react";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(componentDidMount, []);

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  async function handleData() {
    try {
      const response = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/characters",
      );
      const data = await response.json();
      const details = data.map(toCharacters);
      setCharacters(details);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    }
  }

  return (
    <main>
      <section>{characters}</section>
      <p>{"didMount: " + didMount}</p>
    </main>
  );
}

function toCharacters(dataItem, index) {
  return (
    <details key={dataItem.nickname || index}>
      <summary>{dataItem.fullName}</summary>
      <figure>
        <img src={dataItem.image} alt={dataItem.fullName} />
        <figcaption>{dataItem.interpretedBy}</figcaption>
      </figure>
    </details>
  );
}

// function componentDidMount() {
//     setDidMount(true);
//     const figures = [];

//     for (let index = 0; index < data.length; index++) {
//       const item = data[index];
//       const figure = (
//         <figure>
//           <img src={item.src} />
//           <figcaption>{item.caption}</figcaption>
//         </figure>
//       );
//       figures.push(figure);
//     }
//   }
