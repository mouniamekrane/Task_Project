import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
