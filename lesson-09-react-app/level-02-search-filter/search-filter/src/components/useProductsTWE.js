import { useEffect } from "react";

export function useProducts(prisma) {
  useEffect(componentDidUpdate, [prisma]);

  function componentDidUpdate() {
    if (prisma) handleProducts();
  }

  async function handleProducts() {
    const results = await prisma.products.findMany();
  }
}
