import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 1. Select the root element from index.html and save it to a variable
const divTag = document.getElementById("root");

// 2. Pass the element to createRoot to establish the React environment root object
const root = createRoot(divTag);

// 3. Use the render method on your root object to display the semantic layout
root.render(
  <StrictMode>
    <main>
      <h1>React Root</h1>
      <p>
        The React root finds a single empty box on your webpage, hands the keys
        over to React, and turns the power on so your code can show up on the
        screen.
      </p>
    </main>
  </StrictMode>,
);
