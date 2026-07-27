import { useInputTWE } from "react";
import { useSecret } from "../hooks/useSecret";

export function useCreate(prisma, setData) {
  useInputTWE();

  async function handleCreate(event) {
    event.preventDefault();
    if (prisma) {
      const form = event.target;
      const data = {
        name: form.elements.productName.value,
        src: form.elements.productImage.value,
        price: form.elements.productPrice.value,
      };
      await prisma.products.create({ data });
      const results = await prisma.products.findMany();
      setData(results);
    }
  }

  return handleCreate;
}
