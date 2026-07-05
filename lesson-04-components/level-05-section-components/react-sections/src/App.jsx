// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
//
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// export default function App() {
//   const message1 =
//     "To create local variables in React, you declare them inside your component function just like normal JavaScript variables, using keywords like const or let before the return statement.";
//   const message2 =
//     "To use these variables inside your layout, you embed them directly into your JSX markup by wrapping the variable name inside a set of curly braces.";

//   return (
//     <main>
//       <h1>React Variables</h1>
//       <p>{message1}</p>
//       <p>{message2}</p>
//     </main>
//   );
// }

// import "./App.css";

// function App() {
//   const message1 =
//     "To create local variables in React, you declare them inside your component function just like normal JavaScript variables, using keywords like const or let before the return statement.";
//   const message2 =
//     "To use these variables inside your layout, you embed them directly into your JSX markup by wrapping the variable name inside a set of curly braces.";

//   // 6. Return a main tag
//   return (
//     <main>
//       <h1>React Variables</h1>
//       <p>{message1}</p>
//       <p>{message2}</p>
//     </main>
//   );
// }

// export default App;
