import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 4. Let the Header component render the requested title */}
      <Header title="Render API Data with React" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
