import React from "react";
import { RecipeTable } from "../index.js";
import recipeJSON from "../recipeData.json";

//TODO: browse all recipes, or search by name
//put search bar at top of screen, below nav
//search by title, or ingredient

//TODO: add constants list for dessert, sauce, realFood

const HomePage = () => {
  return (
    <div class="container">
      <h1 className="display-3">Browse All Recipes</h1>

      <div class="container p-3">
        <h1 className="display-4">Desserts</h1>
              <RecipeTable recipeData={recipeJSON.desserts} category={"desserts"}/>
        <h1 className="display-4">Real Food</h1>
              <RecipeTable recipeData={recipeJSON.realFood} category={"realFood"}/>
        <h1 className="display-4">Sauces</h1>
              <RecipeTable recipeData={recipeJSON.sauces} category={"sauces"}/>
      </div>
    </div>
  );
};

export default HomePage;
