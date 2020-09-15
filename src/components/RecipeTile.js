import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { actionTypes, AppContext } from "../index";
import { DESSERTS, SAUCES } from "../state/actions.js";

//TODO: on click, change link to button, and find the recipe and set
//the info in state
const RecipeTile = ({ title, img, category }) => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const goToRecipe = () => {
    console.log("go to recipe?");
    history.push("/Recipe");
    dispatch({
      type: actionTypes.SET_RECIPE,
      recipeName: title,
      category: category
    });
  };

  return (
    <div
      role="button"
      className={"card p-3"}
      style={{ width: "18rem" }}
      onClick={goToRecipe}
    >
      <img
        className={"img-rounded card-img-top"}
        src={img}
        alt={"Recipe image"}
      />

      <div className={"card-body"}>
        <p className={"card-title"}>{title}</p>
      </div>
    </div>
  );
};

export default RecipeTile;
