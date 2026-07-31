import { useState } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();

  return user;
}
