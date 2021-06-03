import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/drink/:id" component={ResultDetailsPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
