import { Fragment, useEffect, useState } from "react";
import { useInputTWE } from "../hooks/useInputTWE";
import { useSecret } from "../hooks/useSecret";
import { createWebClient } from "../../../web-client";
import schema from "../../../json-schema.json";

export function WebClient() {
  useInputTWE();
  const [password, handleSubmit] = useSecret("password");
  const [data, setData] = useState([]);
  useEffect(componentDidUpdate, [password]);
  const [prisma, setPrisma] = useState();

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            type="passwaord"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="password"
            id="password"
            placeholder="Database Password"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
            Database Password:
          </label>
        </div>

        <button
          Submit
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"></button>
      </form>

      <form onSubmit={handleCreate}>
        <fieldset>
          <legend>Create Product Data</legend>
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              name="productName"
              id="productName"
              placeholder="Product Name"
            />
            <label
              htmlFor="productName"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Product Name:
            </label>
          </div>

          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              name="productImage"
              id="productImage"
              placeholder="Product Image URL"
            />
            <label
              htmlFor="productImage"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Product Image:
            </label>
          </div>

          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="number"
              step="any"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              name="productPrice"
              id="productPrice"
              placeholder="Product Price"
            />
            <label
              htmlFor="productPrice"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Product Price:
            </label>
          </div>
        </fieldset>

        <button
          Submit
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
          Submit
        </button>
      </form>

      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );

  function componentDidUpdate() {
    // debugger;
    if (password) {
      handleData();
    }
  }

  async function handleData() {
    // debugger;
    const client = await createWebClient({
      jsonSchema: schema,
      datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
    });

    const results = await client.products.findMany();
    setData(results);
    setPrisma(client);
  }

  async function handleCreate(event) {
    event.preventDefault();
    if (prisma) {
      const form = event.target;
      const data = {
        name: form.elements.productName.value,
        src: form.elements.productImage.value,
        price: form.elements.productPrice.value,
      };
      await prisma.products.create({ data: data });
      const results = await prisma.products.findMany();
      setData(results);
    }
    // form.reset();
  }
}

function toDetails(item, index) {
  const key = index + item.name;
  const details = (
    <Fragment key={key}>
      <dt>{item.name}</dt>
      <dd>
        <img src={item.src} />
        {item.price}
      </dd>
    </Fragment>
  );
}
