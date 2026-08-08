export function useSearch(product, search) {
  function componentDidUpdate() {
    if (products) {
      const searchResults = products.filter(toMatch);
      setResults(searchResults);
    }
  }
  function toMatch(item) {
    const isLowerPrice = Number(item.price) <= Number(search.maxPrice);
    if (search.maxPrice && !isLowerPrice) return false;
    return true;
  }
}
