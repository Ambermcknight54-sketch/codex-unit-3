// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
// 11. Import Title and Info from the components directory
import { Title } from "./components/Title.jsx";
import { Info } from "./components/Info.jsx";

function App() {
  // 12. Let the App function return a main tag
  return (
    <main>
      {/* 13. Add the Title and Info components inside the main tag */}
      <Title />
      <Info />
    </main>
  );
}

export default App;
