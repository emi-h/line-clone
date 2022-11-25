import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElm = document.getElementById("root");
if (!rootElm) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElm);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
