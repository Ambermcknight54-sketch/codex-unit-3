import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // 6. Add useState to track unmounting state
  const [unmount, setUnmount] = useState(false);

  // 25. Debugger to watch mainComponent and unmount variables change
  debugger;

  // 7. Store the Main element in a variable and pass down setUnmount
  let mainComponent = <Main setUnmount={setUnmount} />;

  // 8. Check if unmount is true
  if (unmount) {
    // 9. Replace with an empty fragment to clear it from the DOM
    mainComponent = <></>;
  }

  return (
    <>
      {/* 5. Header rendering the requested title */}
      <Header title="Unmount Effect" />

      {/* 10. Render the variable holding our component */}
      {mainComponent}

      <Footer />
    </>
  );
}

export default App;
