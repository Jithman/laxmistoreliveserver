import React from "react";

import Logo from "../../Images/path.svg";
import DishesLeftImg from "../../Images/dishesleft.png";
import DishesRightTopImg from "../../Images/disheshrighttop.png";
import DishesCards from "./DishesCards";
import Button from "../Buttons/Button";

import "./Dishes.css";

const Dishes = () => {
  return (
    <div className="dishes-container">
      <div className="dishes-left">
        <img src={DishesLeftImg} alt="dishesleftimg" />
      </div>
      <div className="dishes-center">
        <div className="dishes-content">
          <h1>LAXMI'S KITCHEN</h1>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="dishes-card-display">
          <DishesCards name="THE PERFECT DIET FOOD" date="1 March 2021" />
          <DishesCards name="SALAD FOR EVERYONE" date="5 March 2021" />
          <DishesCards name="HOME MADE FOOD" date="9 March 2021" />
        </div>
        <Button btnName="View All Recipes" />
      </div>

      <div className="dishes-right">
        <img
          src={DishesRightTopImg}
          alt="DishesRightTopImg"
          className="dishes-right-top"
        />
      </div>
    </div>
  );
};

export default Dishes;
