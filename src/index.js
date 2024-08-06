import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Calculator from "./Calculator2";
// import TodoList from "./TodoList";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider> */}
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);

reportWebVitals();
