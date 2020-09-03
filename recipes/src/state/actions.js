import recipeData from "../recipeData.json";

export const setRecipeInfo = (title, category) => {
    return recipeData.desserts.find(recipe => recipe.title === title);
}