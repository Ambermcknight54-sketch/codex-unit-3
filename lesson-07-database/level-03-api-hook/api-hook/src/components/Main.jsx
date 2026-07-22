// /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useBooksApi } from "../hooks/useBooksApi";

export function Main() {
  const [didMount, setDidMount] = useState(false);
  // Use the custom hook and destructure data and handleSubmit
  const [data, handleSubmit] = useBooksApi();
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Max Books:
          <input type="number" name="max" />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Output tag rendering data.map(toDetails) */}
      <output>{data.map(toDetails)}</output>

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
  }

  // Keep this outside and under the Main function
  function toDetails(item, index) {
    const key = index;
    return (
      <details key={key}>
        <summary>{item.title}</summary>
        <img src={item.cover} alt={item.title} />
        <p>{item.description}</p>
      </details>
    );
  }
}
