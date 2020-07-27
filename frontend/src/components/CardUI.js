import React from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";

const Card = (props, ref) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
      </div>
    </div>
  );
};
export default Card;
