import { useState, useEffect } from "react";
// 11. Default import without curly braces from the relative data path
import data from "../data/data.js";

// 6. Track mount phase
export function Main() {
  const [didMount, setDidMount] = useState(false);

  // 13 & 14. Stateful array containing HTML code destructured into images/setImages
  const [images, setImages] = useState([]);

  // 25. Breakpoint to watch state variables change during execution
  // debugger;

  useEffect(componentDidMount, []);

  // 6. Mount phase callback function
  function componentDidMount() {
    setDidMount(true);
    // 25. Breakpoint inside the mount execution block
    // debugger;

    // 17. Array to hold our JSX elements temporarily
    const figures = [];

    // 18. Traverse the data array with a traditional for loop written out
    for (let i = 0; i < data.length; i++) {
      // 19, 20 & 21. Construct figure tag with an img and figcaption from the current item
      const figure = (
        <figure key={i}>
          <img src={data[i].src} alt={data[i].caption} />
          <figcaption>{data[i].caption}</figcaption>
        </figure>
      );

      // 22. Push the newly created element into the local array
      figures.push(figure);
    }

    // 23. Save the completed array of HTML elements into our stateful variable
    setImages(figures);
  }

  return (
    <main>
      {/* 6. Render the boolean state string using concatenation */}
      <p>{"didMount: " + didMount}</p>

      {/* 15. Render images inside a section tag */}
      <section>{images}</section>

      {/* 28. Explanation p tag explaining how to use a loop to render a data array */}
      <p>
        It takes raw data, wraps it in HTML, and tells React to display it when
        the page loads.
      </p>
    </main>
  );
}

export default Main;
// import { useState, useEffect } from "react";
// // 11. Default import without curly braces from the relative data path
// import {data} from "../data/data.js";

// export function Main() {
//   debugger;
//   const [didMount, setDidMount] = useState(false);
//   const [subjects, setSubjects] = useState([]);
//   useEffect(componentDidMount, []);

//   return (
//     <main>
//       <p>{"didMount: " + didMount}</p>
//       <section>{subjects}</section>

//     </main>
//   );

//   function componentDidMount() {
//     setDidMount(false);
//     const details = [];
//   for (let index =0; index < data.length; index ++)
//     const item = (
//   <details>;
//       <summary>item.name</summary>
//       {item.description}
//     </details>

//     );
//     detailsElements.push(details);

//   }
//   setSubjects(detailsElements);
// }
// export default Main;
