import { useEffect, useState } from "react";

export function useSearch(products, search) {
  const [results, setResults] = useState([]);

  useEffect(componentDidUpdate, [products, search]);

  return results;

  function componentDidUpdate() {
    if (products) {
      const searchResults = products.filter(toMatch);
      setResults(searchResults);
    }
  }

  function toMatch(item) {
    if (!search) return true; // If search object isn't set yet, match everything

    if (search.maxPrice) {
      const isLowerPrice = item.price <= search.maxPrice;
      if (!isLowerPrice) return false;
    }

    return true;
  }
}
