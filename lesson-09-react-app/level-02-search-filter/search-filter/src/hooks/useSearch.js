import { useState, useEffect } from "react";

export function useSearch(products, search) {
  const [results, setResults] = useState([]);

  useEffect(componentDidUpdate, [products, search]);

  function componentDidUpdate() {
    if (products) {
      const searchResults = products.filter(toMatch);
      setResults(searchResults);
    }
  }

  function toMatch(item) {
    const matchesId = Number(item.id) === Number(search?.id);
    const includesName = search?.productName
      ? item.name.toLowerCase().includes(search.productName.toLowerCase())
      : true;
    const isLowerPrice = Number(item.price) <= Number(search?.maxPrice);

    if (search?.id && !matchesId) return false;
    if (search?.productName && !includesName) return false;
    if (search?.maxPrice && !isLowerPrice) return false;

    return true;
  }

  return results;
}
