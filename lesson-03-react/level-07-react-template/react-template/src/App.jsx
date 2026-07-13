// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// src/App.jsx
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <h1>React Template</h1>
        <p>
          A React template is a starter codebase designed to jumpstart the
          development of a web application. Instead of configuring everything
          from scratch, it provides a pre-structured foundation with essential
          files, dependencies, and layout pieces already set up.
        </p>
      </main>

      <Main />
      <Footer />
    </>
  );
}

export default App;
