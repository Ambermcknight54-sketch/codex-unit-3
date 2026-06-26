// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import React from "react";
import "./App.css"; // Importing our custom styles

function App() {
  return (
    // Step 6: Containing adjacent elements inside a React Fragment
    <>
      {/* Step 7: Header tag with title */}
      <header>
        {" "}
        Site-Header"
        <h1>React Fragment</h1>
      </header>

      {/* Step 8: Main tag with a custom explanation */}
      <main>
        "Main-Content"
        <p>
          A React Fragment lets a component return multiple side-by-side
          elements simultaneously.
        </p>
      </main>

      {/* Step 9: Footer tag with standard info */}
      <footer>
        {" "}
        Site-Footer"
        <p> Frontend Development </p>
      </footer>
    </>
  );
}

export default App;
