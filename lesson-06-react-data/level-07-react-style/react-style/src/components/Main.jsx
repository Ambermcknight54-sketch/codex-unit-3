// import React from "react";
import Slides from "./Slides";

export default function Main() {
  return (
    <>
      <header>
        <h1>TW Elements Carousel Integration</h1>

        {/* Task 31: Paragraph tag explaining how to render TWE components */}
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
    </>
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
