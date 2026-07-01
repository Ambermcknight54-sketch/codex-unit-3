import { useState, useEffect } from "react";
// 11. Import the data array (default import, no curly braces)
import imageData from "../data/data.js";

function Main() {
  // 6. State to track the mount phase
  const [didMount, setDidMount] = useState(false);

  // 13 & 14. Stateful array initialized to an empty array to hold HTML elements
  const [images, setImages] = useState([]);

  // 25. Debugger above the return statement to watch state changes
  debugger;

  // 6. Trigger componentDidMount on initial mount phase
  useEffect(componentDidMount, []);

  // 6. Callback function for the mount phase
  function componentDidMount() {
    // 25. Debugger inside mount phase
    debugger;

    setDidMount(true);

    // 17. Array to hold our JSX elements temporarily
    const figures = [];

    // 18. Traverse the data array with a traditional for loop
    for (let i = 0; i < imageData.length; i++) {
      // 19, 20 & 21. Create a figure tag with an img and a figcaption using data properties
      const figure = (
        <figure key={i}>
          <img src={imageData[i].src} alt={imageData[i].caption} />
          <figcaption>{imageData[i].caption}</figcaption>
        </figure>
      );

      // 22. Push the JSX element into the figures array
      figures.push(figure);
    }

    // 23. Save the completed array of HTML tags into our stateful variable
    setImages(figures);
  }

  return (
    <main>
      {/* 6. Render the value of didMount using string concatenation */}
      <p>{"didMount: " + didMount}</p>

      {/* 15. Render the stateful images array inside a section tag */}
      <section>{images}</section>

      {/* 28. Simple p tag explaining how to render a data array with HTML */}
      <p>
        To render a data array into HTML, we loop through the items during the
        mount phase using a for loop. Inside the loop, we wrap each item's data
        into semantic figure tags, push them into an array, and save that array
        to state so React can dynamically output the elements on the page.
      </p>
    </main>
  );
}

export default Main;
