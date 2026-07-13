import { useState, useEffect } from "react";
import { MOUNT_PHASE } from "../data/lifecycle.js";
import { data } from "../data/data.js";

function Main() {
  // debugger;
  const [didMount, setDidMount] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(componentDidMount, MOUNT_PHASE);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{images}</section>
      <p>
        Using the Mount_Phase to render a data array by taking list of
        information (like a list of names, products, or images) an turning each
        item into HTML elements so they display on a web page.
      </p>
    </main>
  );

  function componentDidMount() {
    // debugger;
    setDidMount(true);
    const figures = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const figures = (
        <figure>
          <img src={item.src} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      );
      figures.push(figures);
    }
    setImages(figures);
  }
}

export default Main;
