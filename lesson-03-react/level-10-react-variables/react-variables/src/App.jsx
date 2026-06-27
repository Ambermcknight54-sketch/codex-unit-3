// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // 11. Create 2 string variables above the return statement
  // 12. Explanation for creating variables
  const message1 =
    "To create local variables in React, you declare them inside your component function just like normal JavaScript variables, using keywords like const or let before the return statement.";

  // 13. Explanation for using variables
  const message2 =
    "To use these variables inside your layout, you embed them directly into your JSX markup by wrapping the variable name inside a set of curly braces.";

  // 6. Return a main tag
  return (
    <main>
      {/* 7, 8. h1 title inside the main tag */}
      <h1>React Variables</h1>

      {/* 7, 9, 14. p tags with the variables inserted into curly braces */}
      <p>{message1}</p>
      <p>{message2}</p>
    </main>
  );
}

export default App;
