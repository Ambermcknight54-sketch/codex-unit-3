// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { ApiKey } from "../pages/ApiKey";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apikey" element={<ApiKey />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
