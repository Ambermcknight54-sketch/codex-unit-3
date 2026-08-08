import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export function Authentication({ setLogin, user }) {
  let component;

  if (user) {
    component = <Logout setLogin={setLogin} />;
  } else {
    component = <Login setLogin={setLogin} />;
  }
  return component;
}
