/* eslint-disable */
import { useState, useEffect } from "react";
import { createWebClient } from "../../../web-client.js";
import schema from "../../../prisma-template/prisma/schema";

export function usePrisma(password) {
  const [prisma, setPrisma] = useState();
  const [data, setData] = useState([]);

  useEffect(componentDidUpdate, [password]);

  return prisma;

  function componentDidUpdate() {
    handlePrisma();
  }

  async function handlePrisma() {
    if (password) {
      const connectionString = `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`;
      const prisma = await createWebClient({
        datasourceUrl: connectionString,
        jsonSchema: "json-schema.json",
      });
      const results = await prisma.products.findMany();
      setData(results);
      setPrisma(prisma);
    }
    return data;
  }
}
