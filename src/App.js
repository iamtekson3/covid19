import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar branding="COVID19" />
      <div className="container">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
