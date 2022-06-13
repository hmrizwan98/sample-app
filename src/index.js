import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppContainer from "./appContainer";
import "../src/assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

reportWebVitals();
