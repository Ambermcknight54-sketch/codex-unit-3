import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
import "react";

export default function Main() {
  return (
    <main className="main-content">
      <p>
        To convert a standard layout section into a React component, you extract
        its HTML structure and wrap it inside a JavaScript function that returns
        that code. By separating your site into standalone components like
        Headers, Mains, and Footers, you make your project much cleaner, easier
        to organize, and simpler to update without scrolling through one giant
        file.
      </p>
    </main>
  );
}
