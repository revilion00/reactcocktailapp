import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import ResultDetails from "./pages/ResultDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/drink/:id" component={ResultDetails} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
