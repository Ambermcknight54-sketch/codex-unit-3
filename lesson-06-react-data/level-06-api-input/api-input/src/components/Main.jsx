import { useState, useEffect } from "react";

export function Main() {
  const [characters, setCharacters] = useState([]);
  const [didMount, setDidMount] = useState(false);

  // Track the mount phase
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
        <button type="submit">Fetch Characters</button>
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
      // Fixed the map syntax error here
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
  function toCharacters(dataItem) {
    return (
      <details>
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

//   function toCharacters(dataItem, index) {
//     const key = index + dataItem.fullName;
//     return (
//       <details key={key}>
//         <summary>{dataItem.fullName}</summary>
//         <figure>
//           <img src={dataItem.image} />
//           <figcaption>{dataItem.interpretedBy}</figcaption>
//         </figure>
//       </details>
//     );
//   }
//    export default Main;

//    function toCharacters(dataItem) {
//     return (
//       <details>
//         <summary>{dataItem.fullName}</summary>
//         <figure>
//           <img src={dataItem.image}  />
//           <figcaption>{dataItem.interpretedBy || dataItem.actor}</figcaption>
//         </figure>
//       </details>
//     );
//   }
// }

// export default Main;

//   return (
//     <main>
//       <p>{"didMount: " + didMount}</p>
//       <section>{characters}</section>
//       <p>
//         To render data from an API, we fetch the array of information when the
//         component first mounts. Once we have the data, we use standard dot
//         notation to call the .map method, writing a regular function directly
//         inside it to loop through each character and output organized HTML
//         elements to the page.
//       </p>
//     </main>
//   );

//   function componentDidMount() {
//     setDidMount(true);
//     handleData();
//   }
//   return (
//     <main>
//       {/* 14 & 15. Form layout specifying the max number of characters to fetch */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="max">Max Characters: </label>
//           <input type="number" id="max" name="max" min="5" />
//         </div>
//         <button type="submit">Fetch Characters</button>
//       </form>

//       {/* Render the element array saved in characters state */}
//       <output>{characters}</output>

//       {/* 28. Paragraph explaining the input submission and render process */}
//       <p>
//         To change API data with user input, we capture the values from form
//         submission inputs, wrap them inside a data object, and pass that object
//         into URLSearchParams to generate a clean query string. This data string
//         is appended directly onto the API fetch URL following a question mark,
//         allowing the server to return a filtered array of results that we loop
//         through and render on the screen.
//       </p>
//     </main>
//   );
// }

// // 10. Add index as the second parameter to the callback function
// function toCharacters(dataItem, index) {
//   // 11. Create a unique key tracking loop position combined with character name
//   const key = index + dataItem.fullName;

//   // 12. Apply the invisible tracking key attribute to the details element
//   return (
//     <details key={key}>
//       <summary>{dataItem.fullName}</summary>
//       <p>House: {dataItem.hogwartsHouse}</p>
//       <p>Actor: {dataItem.interpretedBy}</p>
//     </details>
//   );
// }

// export default Main;
