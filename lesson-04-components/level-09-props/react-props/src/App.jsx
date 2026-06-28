import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="React Props" />
      <Main message="To use props in React, add custom attributes to the component tag when rendering it in the parent file. Then, accept the 'props' object as a parameter in the child component function and reference those attributes using dot notation inside curly braces." />
      <Footer />
    </>
  );
}

export default App;
