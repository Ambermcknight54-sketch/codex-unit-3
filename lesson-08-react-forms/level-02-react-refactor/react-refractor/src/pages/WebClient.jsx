import { Fragment, useEffect, useState } from "react";
import { createWebClient } from "../../web-client";
import schema from "../../json-schema.json";
import { DbPassword } from "../components/DbPassword";
import { Create } from "../components/Create";

export function WebClient() {
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const [prisma, setPrisma] = useState();

  useEffect(componentDidUpdate, [password]);

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
    if (password) handleData();

    async function handleData() {
      const client = await createWebClient({
        jsonSchema: schema,
        datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
      });

      const results = await client.products.findMany();
      setData(results);
      setPrisma(client);
    }
  }

  function toDetails(item, index) {
    const key = index + (item.name || item.id);
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
}

export default WebClient;
