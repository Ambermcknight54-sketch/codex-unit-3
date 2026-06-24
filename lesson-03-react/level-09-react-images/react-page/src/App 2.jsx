// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import pic1 from "./assets/blue-space.jpg";
import pic2 from "./assets/blue-space.jpg";
import pic3 from "./assets/blue-space.jpg";

function App() {
  return (
    <main>
      <h1>React Images</h1>
      <p>Images with React</p>
      <div id="pictures">
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />
      </div>
    </main>
  );
}

export default App;
