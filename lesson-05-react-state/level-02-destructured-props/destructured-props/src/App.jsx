import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Destructured Props" />
      <Main
        message="To destructure props in React, 
      replace the single 'props' parameter in your function declaration with curly braces containing the exact property/ attributes names you want to extract, like ({ title, message }). This unpacks them directly into standard variables you can use immediately without typing 'props.' every time."
      />
      <Footer year="2026" />
    </>
  );
}

export default App;
