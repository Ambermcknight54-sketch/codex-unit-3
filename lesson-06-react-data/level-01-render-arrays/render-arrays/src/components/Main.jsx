import { useState, useEffect } from "react";
// 11. Default import without curly braces from the relative data path
import {data} from "../data/data.js";

export function Main() {
  debugger;
  const [didMount, setDidMount] = useState(false);
  const [subjects, setSubjects] = useState([]);
  useEffect(componentDidMount, []);
  
  
  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{subjects}</section>

    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    const details = [];
  for (let index =0; index < data.length; index ++)
    const item = (
  <details>;
      <summary>item.name</summary>
      {item.description} 
    </details>
  
    ); 
    detailsElements.push(details);

  }
  setSubjects(detailsElements);
}
export default Main;

// import { useState, useEffect } from "react";
// // 12. Named import using curly braces from the data file
// import { data } from "../data/data.js";

// // 8. Track mount phase
// export function Main() {
//   const [didMount, setDidMount] = useState(false);
//   const [subjects, setSubjects] = useState([]);

//   // 27. Breakpoint to watch state variables change during execution
//   debugger;

//   useEffect(componentDidMount, []);

//   // 8. Mount phase callback function
//   function componentDidMount() {
//     setDidMount(true);
//     // 27. Breakpoint inside the mount execution block
//     debugger;

//     // 24. Transform data array into React elements using the map method
//     const details = data.map(toDetails);

//     // 25. Pass the newly generated elements to state
//     setSubjects(details);
//   }

//   return (
//     <main>
// {/* 8. Render the boolean state string using concatenation */}
// <p>{"didMount: " + didMount}</p>
// {/* 16. Render subjects inside a section tag */}
// <section>{subjects}</section>

//       {/* 30. Explanation p tag */}
//       <p>
//         To render an array using map, we run the .map method directly on our data.
//         The map tool loops through each object, feeds it to a function to turn
//         it into HTML tags, and instantly outputs the elements onto the page.
//       </p>
//     </main>
//   );
// }

// // 18. Callback function outside and under the Main function
// // 19. Receives a single dataItem object parameter from the data array
// function toDetails(dataItem, index) {
//   // 27. Breakpoint inside the map iteration hook
//   debugger;

//   // 20, 21 & 22. Construct details tag with dynamic properties from dataItem
//   const details = (
//     <details key={index}>
//       <summary>{dataItem.name}</summary>
//       {dataItem.description}
//     </details>
//   );

//   // 23. Return the element to populate the map array output
//   return details;
// }

// export default Main;
//     // 17. Array to hold our JSX elements temporarily
//     const figures = [];

//     export function Main(){

//     }
//     function toDetails(dataItems){
//       const details=
//       <details>
//         <summary>{dataItems.name}</
//       </details>

//    return(d)
// const details = data.map (toDetails);
// setSubjects (details;)

// // 18. Traverse the data array with a traditional for loop
// function componentDidMount (){
//   setDidMount(true);
//   const detailsElements =[]
// //   for (let i = 0; i < data.length; i++)
//   const item = data[index];
//   const details = (
//      <details>
//       <summary> (item.name)</summary>
//       {item.description}
//     </details>
//   );
//   detailsElements.push(details);

// }
// setSubjects(detailsElements);

//       // 19, 20 & 21. Create a figure tag with an img and a figcaption using data properties
//       const figure = (
//         <figure key={i}>
//           <img src={imageData[i].src} alt={imageData[i].caption} />
//           <figcaption>{imageData[i].caption}</figcaption>
//         </figure>
//       );

//       // 22. Push the JSX element into the figures array
//       figures.push(figure);
//     }

//     // 23. Save the completed array of HTML tags into our stateful variable
//     setImages(figures);
//   }

//   return (
//     <main>
//       {/* 6. Render the value of didMount using string concatenation */}
//       <p>{"didMount: " + didMount}</p>

//       {/* 15. Render the stateful images array inside a section tag */}
//       <section>{images}</section>

//       {/* 28. Simple p tag explaining how to render a data array with HTML */}
//       <p>
//         To render a data array into HTML, we loop through the items during the
//         mount phase using a for loop. Inside the loop, we wrap each item's data
//         into semantic figure tags, push them into an array, and save that array
//         to state so React can dynamically output the elements on the page.
//       </p>
//     </main>
//   );
// }

// export default Main;
