// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // 6. Return a main tag (with a layout class applied directly to it)
  return (
    <main className="product-showcase">
      {/* 8, 9. h1 title describing the product */}
      <h1>Mechanical Keyboard</h1>

      {/* 8, 9. p tag describing the product */}
      <p>
        This is a high-quality, split mechanical keyboard made for comfortable
        typing.
      </p>

      {/* 8, 10. Three image tags using valid internet URLs as sources */}
      <img
        src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500"
        alt="Ergonomic mechanical keyboard angled view"
      />
      <img
        src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=500"
        alt="Close up of mechanical switch keycaps"
      />
      <img
        src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?q=80&w=500"
        alt="Minimalist workspace setup with keyboard"
      />
    </main>
  );
}

export default App;
