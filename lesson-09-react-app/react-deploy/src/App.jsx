import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
// import { ApiKey } from "./pages/ApiKey";
import { Navbar } from "./components/Navbar";
import { Page404 } from "./pages/Page404";

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
            {/* <Route path="/apikey" element={<ApiKey />} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
