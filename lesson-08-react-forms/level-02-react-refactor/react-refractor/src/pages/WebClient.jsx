import { Fragment, useEffect, useState } from "react";
import { useInputTWE } from "../hooks/useInputTWE";
import { createWebClient } from "../../../web-client";
import schema from "../../../json-schema.json";
import { DbPassword } from "../components/DbPassword";
import { Create } from "../components/Create";

export function WebClient() {
  useInputTWE();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  useEffect(componentDidUpdate, [password]);
  const [prisma, setPrisma] = useState();

  return (
    <main>
      <DbPassword setPassword={setPassword} />
      <Create prisma={prisma} setData={setData} />
      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );

  function componentDidUpdate() {
    if (password) {
      handleData();
    }
  }

  async function handleData() {
    const client = await createWebClient({
      jsonSchema: schema,
      datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
    });
    setPrisma(client);
    const results = await client.products.findMany();
    setData(results);
  }

  function toDetails(item, index) {
    const key = index + item.name;
    const details = (
      <Fragment key={key}>
        <dt> {item.name}</dt>
        <dd>
          <img src={item.src} />
          {item.price}
        </dd>
      </Fragment>
    );
    return details;
  }
}
