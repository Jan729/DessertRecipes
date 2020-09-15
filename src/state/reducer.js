import React from "react";
import { setRecipeInfo } from "./actions";
import { actionTypes } from "../index";

export const initialState = {
  title: "Microwaved Potato",
  img:
    "data: image/jpeg;base64,/9j / 4AAQSkZJRgABAQAAAQABAAD / 2wCEAAkGBxITEhUTExMWFhUXGB4ZFxgXGRcXGhoaGhgaGhoYGxgZHiggGhslGxcXIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0uLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf / AABEIAMEBBQMBIgACEQEDEQH / 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",
  prepTime: "10 min",
  totalTime: "10 min",
  amount: "1 potato",
  desc: "The easiest way to enjoy a potato.",
  ingredients: ["1 large potato"],
  instructions: [
    "Wash potato",
    "Prick holes in potato with a fork",
    "Microwave for 5 mins, then flip the potato, and microwave for another 5 mins",
    "Eat"
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPE:
      return setRecipeInfo(action.recipeName, action.category);
    default:
      return state;
  }
};
