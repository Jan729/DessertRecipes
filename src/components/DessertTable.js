import React from "react";
import { RecipeTile } from "../index.js";

const RecipeTable = ({ recipeData, category }) => {
  console.log(recipeData);
  return (
    <div class="row">
      {recipeData.map(item => (
        <RecipeTile
          key={item.title}
          title={item.title}
          img={item.img}
          category={category}
        />
      ))}
      {/*<div class="col-md p-3">*/}
    </div>
  );
};

export default RecipeTable;
