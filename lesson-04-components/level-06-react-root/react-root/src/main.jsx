import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 6, 7. Save the selected HTML element in a variable named divTag first
const divTag = document.getElementById("root");

// 8, 11, 12. Pass divTag into createRoot and save the returned Root object in a variable named root
const root = ReactDOM.createRoot(divTag);

// 9, 10, 13. Move the .render method to a separate line and chain it to the root variable
// 14. Overwrite the passed value with a semantic main tag containing your h1 and p tags
root.render(
  <React.StrictMode>
    {/* 15. Semantic main wrapper */}
    <main>
      {/* 16. h1 title */}
      <h1>React Root</h1>

      {/* 17. Explanation of the React Root */}
      <p>
        It automatically starts on its own line and sets a comfortable reading
        distance from other elements.
      </p>

      <p>
        This is a second paragraph, cleanly separated from the first one without
        using any generic containers or line breaks.
      </p>
    </main>
  </React.StrictMode>,
);
