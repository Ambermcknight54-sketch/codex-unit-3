// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* The Header (and Navbar) stays visible on every page */}
      <Header />

      {/* Main page viewports switch dynamically based on the URL path */}
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
