import React from "react";

export default function Sort({ useControlledInput }) {
  const [sortBy, handleSort] = useControlledInput();

  return (
    <form>
      <fieldset className="border border-solid border-gray-300 p-4 rounded-md">
        <legend className="px-2 font-semibold text-gray-700">
          Sort products by:
        </legend>

        {/* Sort by Name Radio Option */}
        <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
          <input
            className="relative float-left -ms-[1.5rem] me-2 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:bg-white checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0"
            type="radio"
            name="sort"
            id="sortProjucts"
            value="sortByName"
            checked={sortBy === "sortByName"}
            onChange={handleSort}
          />
          <label
            className="inline-block ps-[0.15rem] hover:cursor-pointer"
            htmlFor="sortByName">
            Name
          </label>
        </div>

        {/* Sort by Price Radio Option */}
        <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
          <input
            className="relative float-left -ms-[1.5rem] me-2 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:bg-white checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0"
            type="radio"
            name="sort"
            id="sortByPrice"
            value="sortByPrice"
            checked={sortBy === "sortByPrice"}
            onChange={handleSort}
          />
          <label
            className="inline-block ps-[0.15rem] hover:cursor-pointer"
            htmlFor="sortByPrice">
            Price
          </label>
        </div>
      </fieldset>
    </form>
  );
}
