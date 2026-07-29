/* eslint-disable */
import { useState, useEffect } from "react";
import { createWebClient } from "../../../web-client.js";
import schema from "../../../json-schema.json";

export function usePrisma(password, setData) {
  const [prisma, setPrisma] = useState();

  useEffect(componentDidUpdate, [password]);

  return prisma;

  function componentDidUpdate() {
    // debugger;
    if (password) handleData();

    async function handleData() {
      const client = await createWebClient({
        jsonSchema: schema,
        datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
      });
      setPrisma(client);

      const results = await prisma.products.findMany();
      setData(results);
      setPrisma(results);
    }
  }
}
// import { useState, useEffect } from "react";
// import { createWebClient } from "../../../web-client.js";
// import schema from "../../../prisma-template/prisma/schema";

// export function usePrisma(password) {
//   const [prisma, setPrisma] = useState();
//   const [data, setData] = useState([]);

//   useEffect(componentDidUpdate, [password]);

//   return [prisma, data, setData];

//   function componentDidUpdate() {
//     if (password) {
//       handleData();
//     }
//   }

//   async function handleData() {
//     const client = await createWebClient({
//       jsonSchema: schema,
//       datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
//     });

//     setPrisma(client);

//     const results = await client.products.findMany();
//     setData(results);
//   }
// }

// export default usePrisma;
