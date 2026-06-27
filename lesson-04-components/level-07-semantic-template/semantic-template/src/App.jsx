// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
// 14. Import layout landmarks
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  // 14. Return only the semantic sections wrapped in an empty fragment
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
