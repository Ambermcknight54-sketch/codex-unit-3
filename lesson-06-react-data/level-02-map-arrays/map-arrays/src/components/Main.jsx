import { useState, useEffect } from "react";
// 12. Import the data array from the relative data path
import { data } from "../data/data.js";

// 8. Track mount phase
export function Main() {
  const [didMount, setDidMount] = useState(false);

  // 14 & 15. Stateful array containing HTML code destructured into subjects/setSubjects
  const [subjects, setSubjects] = useState([]);

  // 27. Breakpoint to watch state variables change during execution
  // debugger;

  useEffect(componentDidMount, []);

  // 8. Mount phase callback function
  function componentDidMount() {
    setDidMount(true);
    // 27. Breakpoint inside the mount execution block
    // debugger;

    // 24. Transform data array into React elements using the map method
    const details = data.map(toDetails);

    // 25. Pass the newly generated elements to state
    setSubjects(details);
  }

  return (
    <main>
      {/* 8. Render the boolean state string using concatenation */}
      <p>{"didMount: " + didMount}</p>

      {/* 16. Render subjects inside a section tag */}
      <section>{subjects}</section>

      {/* 30. Explanation p tag explaining how to use map to render a data array */}
      <p>
        To render an array using map, we run the .map method directly on our
        data. The map tool loops through each object, feeds it to a function to
        turn it into HTML tags, and instantly outputs the elements onto the
        page.
      </p>
    </main>
  );
}

// 18. Callback function outside and under the Main function
// 19. Receives a single dataItem object parameter from the data array
function toDetails(dataItem) {
  // 27. Breakpoint inside the map iteration hook
  // debugger;

  // 20, 21 & 22. Construct details tag with dynamic properties from dataItem
  const details = (
    <details>
      <summary>{dataItem.name}</summary>
      {dataItem.description}
    </details>
  );

  // 23. Return the details object to populate the map array output
  return details;
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
//   // debugger;

//   useEffect(componentDidMount, []);

//   // 8. Mount phase callback function
//   function componentDidMount() {
//     setDidMount(true);
//     // 27. Breakpoint inside the mount execution block
//     // debugger;

//     // 24. Transform data array into React elements using the map method
//     const details = data.map(toDetails);

//     // 25. Pass the newly generated elements to state
//     setSubjects(details);
//   }

//   return (
//     <main>
//       {/* 8. Render the boolean state string using concatenation */}
//       <p>{"didMount: " + didMount}</p>

//       {/* 16. Render subjects inside a section tag */}
//       <section>{subjects}</section>

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
