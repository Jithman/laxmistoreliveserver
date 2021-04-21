import React from "react";

import { FaPlay } from "react-icons/fa";
import CardImg from "../../Images/dishes1.jpg";

import "./Dishes.css";

const DishesCards = (props) => {
  return (
    <div className="dishes-card">
      <div className="card-cover">
        <img src={CardImg} alt="CardImg" className="card-cover-img" />
      </div>

      <div className="round">
        <FaPlay size={30} style={{ fill: "#FF6767" }} />
      </div>

      <div className="card-second-half"></div>
      <div className="dishes-card-content">
        <h3>{props.className}</h3>
        <h3 className="card-btn">{props.date}</h3>
      </div>
    </div>
  );
};

export default DishesCards;
