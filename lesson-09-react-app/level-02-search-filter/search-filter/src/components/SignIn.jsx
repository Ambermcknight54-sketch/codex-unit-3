import { useState, Fragment } from "react";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import { Search } from "../components/Search";
import { DbPassword } from "../components/DbPassword";
import { usePrisma } from "../hooks/usePrisma";
import { useLogin } from "../hooks/useLogin";
import { useProducts } from "../hooks/useProductsTWE";
import { useSearch } from "../hooks/useSearch";

export function SignIn() {
  const [password, setPassword] = useState();
  const prisma = usePrisma(password);
  const [data, setData] = useState([]);
  const [login, setLogin] = useState();
  const user = useLogin(prisma, login);
  const [search, setSearch] = useState();
  const products = useProducts(prisma);
  const searchResults = useSearch(products, search);

  return (
    <main>
      <DbPassword setPassword={setPassword} />

      {user ? (
        <>
          <p>You are logged in.</p>
          <Logout setLogin={setLogin} />
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}

      <Search setSearch={setSearch} />

      <output>
        <dl>{data.map(toDetails)}</dl>
        <dl>{searchResults?.map(toDetails)}</dl>
      </output>
    </main>
  );
}

function toDetails(item, index) {
  const key = index + item.name;
  return (
    <Fragment key={key}>
      <dt>{item.name}</dt>
      <dd>
        <img src={item.src} alt={item.name} />
        {item.price}
      </dd>
    </Fragment>
  );
}

// import { useState, Fragment } from "react";
// import { Login } from "../components/Login";
// import { Logout } from "../components/Logout";

// export function SignIn() {
//   const [password, setPassword] = useState();
//   const prisma = usePrisma(password);
//   const [data, setData] = useState([]);
//   const [login, setLogin] = useState();
//   const user = useLogin(prisma, login);

//   return (
//     <main>
//       <DbPassword setPassword={setPassword} />

//       {/* Conditionally render Logout when user exists, otherwise Login */}
//       {user ? (
//         <>
//           <p>You are logged in.</p>
//           <Logout setLogin={setLogin} />
//         </>
//       ) : (
//         <Login setLogin={setLogin} />
//       )}

//       <output>
//         <dl>{data.map(toDetails)}</dl>
//       </output>
//     </main>
//   );
// }

// function toDetails(item, index) {
//   const key = index + item.name;
//   return (
//     <Fragment key={key}>
//       <dt>{item.name}</dt>
//       <dd>
//         <img src={item.src} alt={item.name} />
//         {item.price}
//       </dd>
//     </Fragment>
//   );
// }

// import { Fragment, useState } from "react";
// import { usePrisma } from "../hooks/usePrisma";
// import { useLogin } from "../hooks/useLogin";
// import { DbPassword } from "../components/DbPassword";
// import { Login } from "../components/Login";
// import { Logout } from "../components/Logout";

// export function SignIn() {
//   const [password, setPassword] = useState();
//   const prisma = usePrisma(password);
//   const [data, setData] = useState([]);
//   const [login, setLogin] = useState();
//   const user = useLogin(prisma, login);

//   let component = <Login setLogin={setLogin} />;
//   if (user) component = <p>You are logged in.</p>;

//   return (
//     <main>
//       <DbPassword setPassword={setPassword} />
//       {component}
//       <Logout />
//       <output>
//         <dl>{data.map(toDetails)}</dl>
//       </output>
//     </main>
//   );
// }

// function toDetails(item, index) {
//   const key = index + item.name;
//   return (
//     <Fragment key={key}>
//       <dt>{item.name}</dt>
//       <dd>
//         <img src={item.src} alt={item.name} />
//         {item.price}
//       </dd>
//     </Fragment>
//   );
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
