import React, { useContext } from "react";
import recipeData from "../recipeData.json";
import { AppContext } from "../index.js";

const RecipePage = () => {
    //when someone clicks a recipe, save the recipe object in session storage
    //get the title from session storage in here
    //search thru list of recipes to find the recipe info
    const { state } = useContext(AppContext);

    return (
        <div className="container">
            <h1 className="display-3">{state.title}</h1>
            <p>Prep Time: {state.prepTime}</p>
            <p>Total Time: {state.totalTime}</p>
            <p>Yield: {state.amount}</p>
            <img className={"img-fluid img-rounded mt-5 mb-5"} src={state.img} alt={"Card image cap"} />
            <p>{state.desc}</p>
            <h1 className="display-3">Ingredients</h1>
            <ul>{state.ingredients.map(item => <li>{item}</li>)}</ul>
            <h1 className="display-3">Instructions</h1>
            <ol>{state.instructions.map(item => <li>{item}</li>)}</ol>
        </div>
    );
};

export default RecipePage;
