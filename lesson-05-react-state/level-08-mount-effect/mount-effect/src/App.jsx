import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // 6. Add useState and destructure into unmount and setUnmount
  const [unmount, setUnmount] = useState(false);

  // 7. Render element saved to mainComponent variable
  let mainComponent = <Main setUnmount={setUnmount} />;

  // 8 & 9. If unmount is true, replace with a fragment to unmount it
  if (unmount) {
    mainComponent = <></>;
  }

  return (
    <>
      <Header />
      {/* 10. Replace <Main /> with {mainComponent} */}
      {mainComponent}
      <Footer />
    </>
  );
}

export default App;
