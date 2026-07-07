import Slides from "./Slides";

// Make sure it says "export default function"
export default function Main() {
  return (
    <div id="root">
      <header>
        <h1>TW Elements Carousel Integration</h1>
        <p>
          To correctly render TW Elements components within a React environment,
          you must structure HTML attributes into JSX-compliant camelCase
          formats, transform inline styles into JavaScript configuration
          objects, and invoke the initTWE function directly inside the
          component's initial mounting phase using a useEffect hook.
        </p>
      </header>

      <main>
        <Slides />
      </main>
    </div>
  );
}

// import { Slides } from "./Slides.jsx";

// export { Slides } from "./Slides.jsx";

// export function Main() {
//   return (
//     <main>
//       <p>Move id=root tothe body tag</p>
//       <Slides />
//     </main>
//   );
// }
