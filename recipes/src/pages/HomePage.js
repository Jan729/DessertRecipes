import React from "react";
import { DessertTable } from "../index.js";
//browse all recipes, or search by name

//display tiles for each recipe in categories

//desserts

//real food

//sauces

//drinks
const HomePage = () => {
  return (
    <div class="container">
      <h1 className="display-3">Browse All Recipes</h1>

      <div class="container p-3">
        <h1 className="display-4">Desserts</h1>
        <DessertTable />
        <h1 className="display-4">Real Food</h1>
        <DessertTable />
        <h1 className="display-4">Sauces</h1>
        <DessertTable />
      </div>
    </div>
  );
};

export default HomePage;
