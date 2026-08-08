import { Fragment, useState } from "react";
import { DbPassword } from "../components/DbPassword";
import { usePrisma } from "../hooks/usePrisma";
import { Search} from "../components/Read";

export function WebClient() {
  const [password, setPassword] = useState();
  const prisma = usePrisma(password);
  const [data, setData] = useState([]);
  const [search, setSearch = useState();

  return (
    <main>
      <DbPassword setPassword={setPassword} />
      <Search setSearch = {setSearch} />
      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );
} 

// function toDetails(item, index) {
//   const key = index + (item.name || item.id);
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
