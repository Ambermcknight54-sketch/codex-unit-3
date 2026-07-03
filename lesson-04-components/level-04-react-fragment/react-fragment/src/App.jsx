import "./App.css";
function App() {
  return (
    <>
      <header>
        <h1>React Fragment</h1>
      </header>

      <main>
        <p>
          Normally, a React component can only return a single top-level
          element. If you want to return multiple elements side-by-side, you
          would usually have to wrap them in an extra container like a div,
          which clutters up your HTML code. A React fragment acts like an
          invisible wrapper—it groups your elements together so React stays
          happy, but completely vanishes when the page renders in the browser.
        </p>
      </main>

      <footer>
        <p>2026 Amber McKnight. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
