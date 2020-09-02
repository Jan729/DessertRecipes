import React from "react";
import { Link } from "react-router-dom";

const RecipeTile = ({ title, img, link }) => {
  return (
    <div className={"card"} style={{ width: "18rem" }}>
      <Link to={link}>
        <img className={"card-img-top"} src={img} alt={"Card image cap"} />
      </Link>
      <div className={"card-body"}>
        <p className={"card-title"}>{title}</p>
      </div>
    </div>
  );
};

export default RecipeTile;
