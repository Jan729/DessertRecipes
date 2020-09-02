import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { About, HomePage, PageNotFound, Header, Footer } from "./index.js";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
