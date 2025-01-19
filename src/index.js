import React from "react";
import ReactDOM from "react-dom/client"; // Update import for React 18
import App from "./App";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use the new root.render() method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
