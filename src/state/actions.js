import recipeData from "../recipeData.json";
import { DESSERTS, SAUCES, REALFOOD } from "./actionTypes.js";

export const setRecipeInfo = (title, category) => {
  switch (category) {
    case DESSERTS:
      return recipeData.desserts.find(recipe => recipe.title === title);
    case REALFOOD:
        return recipeData.realFood.find(recipe => recipe.title === title);
    case SAUCES:
      return recipeData.sauces.find(recipe => recipe.title === title);
    default:
  }
};
