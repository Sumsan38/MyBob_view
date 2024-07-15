import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./Calculator2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider> */}
    <Calculator />
    {/* </RouterProvider> */}
  </React.StrictMode>
);

reportWebVitals();
