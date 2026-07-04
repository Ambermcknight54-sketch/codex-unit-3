import { createRoot } from "react-dom/client";
// import App from "./App.jsx"; // Note: You can comment this out or leave it if unused
import "./index.css";

// 7. Save the element in the variable divTag first
const divTag = document.getElementById("root");

// 8, 10, 12. Pass divTag to createRoot and save the Root object in a variable named 'root'
const root = createRoot(divTag);

// 13, 14, 15, 16, 17. Chain render to root and pass a main tag with custom content
root.render(
  <main>
    <h1>React Root</h1>
    <p>
      The React root is the entry point of your application. It hooks into a
      standard HTML element in your page and hands over control to React,
      allowing it to dynamically manage, update, and render your component tree
      inside that container.
    </p>
  </main>,
);
