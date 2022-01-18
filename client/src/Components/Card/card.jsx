import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ image, name, price, id }) {
  return (
    <div className="containerCardAll">
      <Link to={`/${id}`}>
        <div className="containerImgCard">
          <img src={image} alt={`imagen de ${name}`} />
        </div>
        <div className="name">
          <strong>{name.toUpperCase()}</strong>
        </div>
        <div className="star">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="conPrice">
          <h3>$ {price} pesos</h3>
        </div>
      </Link>
    </div>
  );
}
