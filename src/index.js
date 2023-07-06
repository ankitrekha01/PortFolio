import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatedCursor
      color={"white"}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".project_each_div",
      ]}
      innerSize={8}
      outerSize={25}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      showSystemCursir={false}
      // hasBlendMode={true}
      outerStyle={{
        border: "2px solid #6a6a6b",
        mixBlendMode: "exclusion",
      }}
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
