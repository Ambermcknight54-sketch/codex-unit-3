// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ApiKey } from "./pages/ApiKey";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      {/* 1. Wrap everything in a main container */}
      <div className="app-container">
        <Header />
        <Navbar />

        {/* 2. Target your main content section */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apikey" element={<ApiKey />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter>
//       <Header />

//       <Navbar />

//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/apikey" element={<ApiKey />} />
//         </Routes>
//       </main>

//       <Footer />
//     </BrowserRouter>
//   );
// }
