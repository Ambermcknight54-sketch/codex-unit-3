// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
// 13. Import your local images into variables
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";

function App() {
  // 7. Return a main tag
  return (
    <main>
      {/* 9. h1 title */}
      <h1>React Images</h1>

      {/* 10. Description of adding local images */}
      <p>
        To include local images in a React project built with Vite, you should
        import the image file at the top of your component just like a
        JavaScript module. This assigns a dynamic path to a variable, which you
        can then inject directly into the src attribute of your image tag using
        curly braces.
      </p>

      {/* 8, 11, 14. Image tags with variables in curly braces */}
      <div className="image-gallery">
        <img src={pic1} alt="First gallery showcase" />
        <img src={pic2} alt="Second gallery showcase" />
        <img src={pic3} alt="Third gallery showcase" />
      </div>
    </main>
  );
}

export default App;
