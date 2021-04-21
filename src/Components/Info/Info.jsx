import React from "react";
import Logo from "../../Images/path.svg";
import Button from "../Buttons/Button";

import BigImg from "../../Images/bigimg.png";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-left">
        <h1>WELCOME TO LAXMI</h1>
        <img src={Logo} alt="logo" className="info-logo" />
        <p>
          An integral part of South Asian diaspora communities, food offers a
          harmonious balance of textures, temperatures and flavours. Like art,
          South Asian cuisine is all things spectacular – subtle complexities,
          overwhelming flavours, homely warmth of the masalas, the aroma of the
          spices &amp; herbs and a kaleidoscope of colours. In a South Asian
          meal, spices play a vital role in the cuisine, health-care and
          spirituality. Spiciness is not always limited to lots of chillies or
          black pepper; it has to do with various aromatic spices that typify
          South Asian cuisines.
        </p>
        <p>
          Laxmi Spices delivers to your doorstep the finest quality of spices,
          sourced from the most premium and vetted vendors all across South
          Asia. Cooking authentic South Asian food to bring diversity to your
          palate will be an easy task! Laxmi Spices aims to make your culinary
          experience more exciting, wholesome and fun!
        </p>
        <Button btnName="Know More" />
      </div>
      <div className="info-right">
        <img src={BigImg} alt="foodimage" />
      </div>
    </div>
  );
};

export default Info;
