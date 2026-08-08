import { useEffect } from "react";
import { useControlledInput } from "../hooks/useControlledInputTWE";
import { useInputTWE } from "../hooks/useInputTWE";

export function Search({ setSearch }) {
  useInputTWE();
  const [id, handleId] = useControlledInput();
  const [name, handle] = useControlledInput();
  const [maxPrice, hadleMaxPrice] = useControlledInput();
  (useEffect(componentDidUpdate), [id, name, , maxPrice]);
  return (
    <form>
      <fieldset>
        {/* Product ID Input */}
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            onChange={handleId}
            type="number"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="productId"
            id="productId"
            placeholder="Enter the product ID"
          />
          <label
            htmlFor="productId"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
            Product ID:
          </label>
        </div>

        {/* Product Name Input */}
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="productName"
            id="productName"
            placeholder="Enter product name"
          />
          <label
            htmlFor="productName"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
            Product Name:
          </label>
        </div>

        {/* Max Price Input */}
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            type="number"
            step={0.01}
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="productPrice"
            id="productPrice"
            placeholder="Enter max price"
          />
          <label
            htmlFor="productPrice"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
            Max Price:
          </label>
        </div>
      </fieldset>
    </form>
  );

  function componentDidUpdate() {
    const data = { id, name, maxPrice };
    setSearch(data);
  }
}
