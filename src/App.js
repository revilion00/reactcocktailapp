import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ResultDetailsPage from "./pages/ResultDetailsPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <GlobalProvider>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/drink/:id" component={ResultDetailsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="*" component={ErrorPage} />
        </GlobalProvider>
      </Switch>
    </Router>
  );
};

export default App;
