// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

import Main from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
