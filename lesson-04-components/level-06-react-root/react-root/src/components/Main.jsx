import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const divTag = document.getElementById("root");
const root = createRoot(divTag);
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
