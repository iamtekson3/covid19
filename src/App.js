import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import CovidCases from "./components/covid/CovidCases";

function App() {
  return (
    <Router>
      <Navbar branding="COVID19" />
      <div className="container">
        <Switch>
          <Route exact path="/" component={CovidCases} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
