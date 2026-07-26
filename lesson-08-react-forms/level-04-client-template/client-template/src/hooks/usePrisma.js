import { useState, useEffect } from "react";
import { CreateWebClient } from "../../../prisma-template";
import schema from "../../../prisma-template";

export function usePrisma(password) {
  const [prisma, setPrisma] = useState();

  useEffect(componentDidUpdate, [password]);
  return prisma;

  function componentDidUpdate() {
    handlePrisma();
  }

  async function handlePrisma() {
    if (password) {
      const connectionString = `postgresql://postgres.lajdxfozfpkirmfudjce:XvDdd347QL1sBem@aws-1-us-east-2.pooler.supabase.com:5432/postgres`;
      const prisma = await CreateWebClient({
        datasourceUrl: connectionString,
        jsonShemma: schema,
      });
      setPrisma(prisma);
    }
  }
}
