import { useState, useEffect } from "react";
import {MOUNT_PHASE} from "../data/lifecycle.js";
import data from "../data/data.js";

const MOUNT_PHASE = [],

export function Main() {
  // 1. Declare all State variables first
  const [didMount, setDidMount] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(componentDidMount, []);
  debugger;
 return (
<main>
     
      <p>{"didMount: " + didMount}</p>
      <section>{images}</section>
      <p>
        Using the Mount_Phase to render a data array by taking list of information (like a list of names, products, or images) 
        an turning each item into HTML elements so they display on a web page.
      </p>
    </main>
 );
 
 function componentDidMount() {
  setDidMount(true);
  const figure = []
    for (let index = 0; i < data.length; i++) {
      const item = data[index];
      const figure = (
        <figure>
          <img src={item.src} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      );
      figures.push(figure)
    }
    setImages(figures)
  }
}

  
    
  

  // 4. The return statement must always come 
// import { useState, useEffect } from "react";

// import data from "../data/data.js";

// export function Main() {
//   const [didMount, setDidMount] = useState(false);
//   const [images, setImages] = useState([]); // 1. React tracks this state variable
// return (
//     <main>
//       <p>{"didMount: " + didMount}</p>

//       {/* 4. React sees the state changed, triggers a re-render, and displays them here */}
//       <section>{images}</section>

//       <p>
//         To render data from an API, we fetch the array of information when the
//         component first mounts. Once we have the data, we use standard dot
//         notation to call the .map method, writing a regular function directly
//         inside it to loop through each character and output organized HTML
//         elements to the page.
//       </p>
//     </main>
// )
//  // 1. This triggers the function when the component mounts
// useEffect(componentDidMount, []);

// function componentDidMount() {
//   const figures = []; // 2. This is the temporary JavaScript array

//   // 3. Traverse the data array with a for loop
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];

//     // 4. Create the figure element with img and figcaption tags
//     const figure = (
//       <figure>
//         <img src={item.src} />
//         <figcaption>{item.caption}</figcaption>
//       </figure>
//     );

//     // 5. Add the figure into your temporary array
//     figures.push(figure);
//   } // <-- Closes the for loop

//   // 6. Set the state right after the for loop finishes
//   setImages(figures);

//   setDidMount(true);
// } // <-- Closes the componentDidMount function
//       figures.push(figure);
//     }

//     // 3. THIS LINE: Moves the items from the temporary array into React state
//     setImages(figures);

//     setDidMount(true);
//   }

// // export function Main() {
// const [characters, setCharacters] = useState([]);
// const [didMount, setDidMount] = useState(false);
// const [] = useState([]); // This stateful array will contain HTML code

// // 13 & 14. Stateful array containing HTML code destructured into images/setImages
// const [images, setImages] = useState([]);

// // Track the mount phase
// useEffect(componentDidMount, []);

// function componentDidMount() {
//   setDidMount(true);

//   // import { useState, useEffect } from "react";
//   // // 11. Default import without curly braces from the relative data path
//   // import data from "../data/data.js";

//   // // 6. Track mount phase
//   // export function Main() {
//   //   const [didMount, setDidMount] = useState(false);
//   // // 13 & 14. Stateful array containing HTML code destructured into images/setImages
//   //   const [images, setImages] = useState([]);
//   //   // debugger;

//   //   useEffect(componentDidMount, []);

//   //   // 6. Mount phase callback function
//   //   function componentDidMount() {
//   //     setDidMount(true);
//   // debugger;

//   // 17. Array to hold our JSX elements temporarily
//   const figures = [];

//   // 18. Traverse the data array with a traditional for loop written out
//   for (let i = 0; i < data.length; i++) {
//     // 19, 20 & 21. Construct figure tag with an img and figcaption from the current item
//     const figure = (
//       <figure key={i}>
//         <img src={data[i].src} alt={data[i].caption} />
//         <figcaption>{data[i].caption}</figcaption>
//       </figure>
//     );

//     // 22. Push the newly created element into the local array
//     figures.push(figure);
//   }

//   // 23. Save the completed array of HTML elements into our stateful variable
//   setImages(figures);
// }

// return (
//   <main>
//     {/* 6. Render the boolean state string using concatenation */}
//     <p>{"didMount: " + didMount}</p>

//     {/* 15. Render images inside a section tag */}
//     <section>{images}</section>

//     {/* 28. Explanation p tag explaining how to use a loop to render a data array */}
//     <p>
//       It takes raw data, wraps it in HTML, and tells React to display it when
//       the page loads.
//     </p>
//   </main>
// );
// }
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
