import { useEffect, useState } from "react";
import { MOUNT_PHASE } from "../data/lifecycle.js";
import { data } from "../data/data.js";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  const [subjects, setSubjects] = useState();
  useEffect(componentDidMount, MOUNT_PHASE);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{subjects}</section>

      <p>
        To render an array using map, we run the .map method directly on our
        data. The map tool loops through each object, feeds it to a function to
        turn it into HTML tags, and instantly outputs the elements onto the
        page.
      </p>
    </main>
  );
  function componentDidMount() {
    // debugger;
    setDidMount(true);

    const detailsElements = data.map(toDetails);
    setSubjects(detailsElements);
  }
}
function toDetails(dataItem) {
  const details = (
    <details>
      <summary>{dataItem.name}</summary>
      {dataItem.description}
    </details>
  );
  return details;
}
