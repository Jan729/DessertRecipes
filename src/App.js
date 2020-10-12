import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import {
  About,
  HomePage,
  PageNotFound,
  Header,
  Footer,
  RecipePage
} from "./index.js";
import { initialState, reducer } from "./state/reducer";

export const AppContext = React.createContext(initialState);

//Note to self: If you want to add more recipes, add another entry inside recipeData.json like so:
/**{
      "title": "",
      "img": "lavenderShortbread.png",
      "prep-time": "",
      "total-time": "",
      "amount": "",
      "desc": "",
      "ingredients": [],
      "instructions": []
    } */

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Recipe" component={RecipePage} />
            <Route exact path="/" component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </AppContext.Provider>
  );
};

export default App;
