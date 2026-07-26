/* eslint-disable */
import { useState } from "react";
import { DbPassword } from "../components/DbPassword";
import { usePrisma } from "../hooks/usePrisma";

export function WebClient() {
  const [password, setPassword] = useState();
  const prisma = usePrisma(password);
  return (
    <main>
      <DbPassword />
    </main>
  );
}
