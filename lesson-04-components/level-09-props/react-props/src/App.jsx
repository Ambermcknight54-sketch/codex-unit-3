import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 10. Added the title attribute */}
      <Header title="React Props" />

      {/* 16 & 17. Added the message attribute with an explanation */}
      <Main
        message="Props are like inputs for a function. When you add attributes to a custom React tag, 
      React puts them all into a single object called props so your component can use that data."
      />
      <Footer />
    </>
  );
}

export default App;
