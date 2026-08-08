import { useState } from "react";
import { useEffect } from "react";

export function useSort(products, sortBy) {
  const [results, setResults] = useState([]);
  useEffect(componentDidUpdate, [products, sortBy]);
  return results;

  function componentDidUpdate() {
    if (products) {
      const sortResults = products.toSorted(byMethod);
      setResults(searchResults);
    }
  }

  function byMethod(item1, item2) {
    switch (sortBy) {
      case "sortByPrice":
        const priceResult = Number(item1.price) - Number(item2.price);
        return priceResult;
      case "sortByName":
        const nameResult = item1.name.localCompare(item2.name);
        return nameResult;
      default:
        return 0;
    }
  }
}
