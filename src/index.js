import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


import RecipeTable from "./components/DessertTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeTile from "./components/RecipeTile";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import RecipePage from "./pages/RecipePage";

import * as actionTypes from "./state/actionTypes";
import { AppContext } from "./App"

ReactDOM.render(
    <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export {
  actionTypes,
  About,
  AppContext,
  RecipeTable,
  Footer,
  HomePage,
  Header,
  PageNotFound,
  RecipePage,
  RecipeTile
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
