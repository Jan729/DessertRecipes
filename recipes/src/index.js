import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import DessertTable from "./components/DessertTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeTile from "./components/RecipeTile";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

export {
  About,
  DessertTable,
  Footer,
  HomePage,
  Header,
  PageNotFound,
  RecipeTile
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
