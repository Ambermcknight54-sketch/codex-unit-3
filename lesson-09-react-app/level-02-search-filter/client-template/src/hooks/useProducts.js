import { useState, useEffect } from "react";

export function useProducts(prisma) {
  const [products, setProducts] = useState();

  useEffect(componentDidUpdate, [prisma]);
  //    return products;

  function componentDidUpdate() {
    if (prisma) {
      handleProducts();
    }
  }

  async function handleProducts() {
    const allProducts = await prisma.products.findMany();
    setProducts(allProducts);
  }

  return products;
}
