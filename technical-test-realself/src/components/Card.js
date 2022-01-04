import React from "react";
import './Card.css';

const Card = (props) => {
  console.log(props.card);
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={props.card.image}></img>
      </div>
      <div className="card-body-container">
        <h2><b>{props.card.name}</b></h2>
        <p>{props.card.status}</p>
        <p>{props.card.species}</p>
        <p>Last Know location: {props.card.location.name}</p>
        <p>First see in: {props.card.origin.name}</p>
      </div>

    </div>
  );
};

export default Card;
