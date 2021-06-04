import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalContext";

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

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
