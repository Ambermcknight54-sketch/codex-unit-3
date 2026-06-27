import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
import React from "react";
import Title from "./components/Title.jsx";
import Info from "./components/Info.jsx";
import "./App.css"; // Make sure styles are imported

function App() {
  return (
    <main className="content-container">
      <Title />
      <Info />
    </main>
  );
}

export default App;
