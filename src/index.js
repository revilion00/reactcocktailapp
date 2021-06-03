import React from "react";
import ReactDOM from "react-dom";

//CSS import
import "./styles/About.css";
import "./styles/GeneralStyling.css";
import "./styles/Input.css";
import "./styles/Loading.css";
import "./styles/Navbar.css";
import "./styles/Reset.css";
import "./styles/ResultDetails.css";
import "./styles/ResultSection.css";
import "./styles/Responsive.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
