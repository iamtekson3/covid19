import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import CovidCases from "./components/covid/CovidCases";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar branding="COVID19" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={CovidCases} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
