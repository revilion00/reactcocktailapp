import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components import
import Header from "./components/Header";
//pages import
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import ResultDetails from "./pages/ResultDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path="/"> 
          <Home />
        </Route>

        <Route path="/about"> 
          <About />
        </Route>

        <Route path="/drink/:id"> 
          <ResultDetails />
        </Route>

        <Route path="*"> 
          <Error />
        </Route>

      </Switch>
    </Router>    
    
  );
}

export default App;
