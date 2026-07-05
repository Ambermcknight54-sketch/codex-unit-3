// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Destructured useState</h1>
      <p>
        In React, components are functions, but normal functions forget their
        data after they run. A stateful variable acts like a memory chip that
        preserves its value between function calls. When you click the button,
        the setter function updates this value, which tells React to clear the
        old view and re-render the page with the brand new count.
      </p>
    </main>
  );
}

export default App;
