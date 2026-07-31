import { useState, useEffect } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();

  useEffect(componentDidUpdate, [prisma, login]);

  return user;

  function componentDidUpdate() {
    if (prisma) {
      if (login) {
        handleLogin();
      }
    }
  }

  async function handleLogin() {
    const foundUser = await prisma.users.findFirst({
      where: {
        email: login.email,
        password: login.password,
      },
    });
    setUser(foundUser);
  }
}
