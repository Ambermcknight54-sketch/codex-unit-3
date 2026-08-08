import { useEffect } from "react";
import { useInputTWE } from "../hooks/useInputTWE.js";
import { createWebClient } from "../  prisma-template/web-client.js";
import schema from "../../../prisma-template/json-schema.json";
import { DbPassword } from "../components/DbPassword.jsx";
import { usePrisma } from "../hooks/usePrisma.js";
import { Search } from "../components/Search.jsx";
import { Sort } from "../components/Sort.jsx";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts.js";
import { useSearch } from "../hooks/useSearch.js";

export function Client() {
  useInputTWE();
  const [password, setPassword] = useState();
  const prisma = usePrisma(password);
  const [data, setData] = useState([]);

  const [search, setSearch] = useState();
  const products = useProducts(prisma);
  const [sortBy, setSortBy] = useState([]);
  const searchResults = useSearch(products, search);

  const toDetails = (item, index) => (
    <div key={item.id || index}>
      <dt>{item.name}</dt>
      <dd>{item.price ? `$${item.price}` : item.description}</dd>
    </div>
  );

  return (
    <main>
      <DbPassword setPassword={setPassword} />
      <Search setSearch={setSearch} />
      <Sort setSortBy={setSortBy} />
      <output>
        <dl> {data.map(toDetails)} </dl>
        <dl>{searchResults.map(toDetails)}</dl>
      </output>
    </main>
  );
}

// import { useEffect } from "react";
// import { useInputTWE } from "../hooks/useInputTWE";
// import { createWebClient } from "../../../prisma-template/web-client.js";
// import schema from "../../../prisma-template/json-schema.json";
// import { DbPassword } from "../components/DbPassword";
// import { usePrisma } from "../hooks/usePrisma";
// import { Search } from "../components/Search";
// import { Sort } from "../components/Sort";
// import { useState } from "react";
// import { useProducts } from "../hooks/useProducts";
// import { useSearch } from "../hooks/useSearch";

// export function WebClient() {
//   useInputTWE();
//   const [password, setPassword] = useState();
//   const prisma = usePrisma(password);
//   const [data, setData] = useState([]);

//   const [search, setSearch] = useState();
//   const products = useProducts(prisma);
//   const [sortBy, setSortBy] = useState([]);
//   const searchResults = useSearch(products, search);

//   return (
//     <main>
//       <DbPassword setPassword={setPassword} />
//       <Search setSearch={setSearch} />
//       <Sort setSortBy={setSortBy} />
//       <output>
//         <dl> {data.map(toDetails)} </dl>
//         <dl>{searchResults.map(toDetails)}</dl>
//       </output>
//     </main>
//   );
// }
// function toDetails(item, index) {
//   const key = index + item.name;
//   const details = (
//     <Fragment key={key}>
//       <dt> {item.name}</dt>
//       <dd>
//         <img src={item.src} />
//         {item.price}
//       </dd>
//     </Fragment>
//   );
//   return details;
// }

// function componentDidUpdate() {
//   if (password) {
//     handleData();
//   }
// }

// async function handleData() {
//   const client = await createWebClient({
//     jsonSchema: schema,
//     datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
//   });
//   setPrisma(client);
//   const results = await client.products.findMany();
//   setData(results);
// }
