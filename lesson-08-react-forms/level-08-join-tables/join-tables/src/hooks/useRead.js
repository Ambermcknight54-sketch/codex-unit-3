import { useState } from "react";

export function useRead(prisma) {
  const [data, setData] = useState();

  return [data, handleSubmit];

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const where = {};

    const productId = form.elements.productId.value;
    const productName = form.elements.productName.value;
    const maxPrice = form.elements.maxPrice.value;

    if (productId) where.id = productId;
    if (productName) where.name = productName;
    if (maxPrice) where.price = { lte: maxPrice }; // Fixed: 'where.price' instead of 'where.id'

    const results = await prisma.products.findMany({
      where: where,
      include: {
        reviews: {
          include: {
            users: true,
          }, // Fixed: added missing closing brace for inner include
        },
      },
    });

    setData(results);
  }
}

// import { useState } from "react";

// export function useRead(prisma) {
//   const [data, setData] = useState();
//   return [data, handleSubmit];

//   async function handleSubmit(event) {
//     event.preventDefault();
//       const form = event.target;
//       const where = {
//         id: form.elements.productId.value,
//       };
//       const data = ();
//       const productName = form.elements.productName.value;
//       const productPrice = form.elements.productPrice.value;
//       const productImage = form.elements.productImage.value;
//       if (productName) data.name = productName;
//       if (productPrice) where.src = productPrice;
//       if (productPrice) where.price =productPrice;

//       const results = await prisma.products.findMany({ where });
//       setData([results]);
//     }
//   }

//     name: form.elements.productName.value,
//     src: form.elements.productImage.value,
//     price: form.elements.productPrice.value,
//   };
//   await prisma.products.create({ data });
//   const results = await prisma.products.findMany();
//   setData(results );
