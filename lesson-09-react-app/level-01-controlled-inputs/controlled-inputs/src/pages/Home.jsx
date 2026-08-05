import { useState, Fragment } from "react";
import { Search } from "../components/Search";

export function Home() {
  const [data, setData] = useState([]);

  return (
    <main>
      <h1>Search Products</h1>

      <p>
        Custom hooks simplify controlled inputs by encapsulating the state
        management and onChange event handler logic into a reusable function,
        keeping component code clean and driving real-time state updates.
      </p>

      <Search setData={setData} />

      <dl>{data.map(toDetails)}</dl>
    </main>
  );

  function toDetails(item, index) {
    return (
      <Fragment key={index}>
        <dt>Product Name:</dt>
        <dd>{item.name}</dd>
      </Fragment>
    );
  }
}
