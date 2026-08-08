import { useEffect } from "react";
import { useControlledInput } from "../hooks/useControlledInput";
import { useInputTWE } from "../hooks/useInputTWE";

export function Search({ setData }) {
  useInputTWE();

  const [name, handleName] = useControlledInput();
  const [price, handlePrice] = useControlledInput();
  const [src, handleSrc] = useControlledInput();

  useEffect(componentDidUpdate, [name, price, src]);

  function componentDidUpdate() {
    const data = {
      name,
      price,
      src,
    };

    setData([data]);
  }

  return (
    <form>
      <fieldset>
        <legend>Product Search</legend>

        <div data-twe-input-wrapper-init="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Product Name"
            value={name}
            onChange={handleName}
          />

          <label htmlFor="name">
            Product Name:
          </label>
        </div>

        <div data-twe-input-wrapper-init="">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter Product Price"
            value={price}
            onChange={handlePrice}
          />

          <label htmlFor="price">
            Product Price:
          </label>
        </div>

        <div data-twe-input-wrapper-init="">
          <input
            type="text"
            name="src"
            id="src"
            placeholder="Enter Product Image URL"
            value={src}
            onChange={handleSrc}
          />

          <label htmlFor="src">
            Product Image:
          </label>
        </div>
      </fieldset>
    </form>
  );
}