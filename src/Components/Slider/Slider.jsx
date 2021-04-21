import React, { useState } from "react";
import { images } from "./SliderData";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import "./Slider.css";

const Slider = () => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <div className="circle">
            <ArrowBackOutlinedIcon />
          </div>
        </div>

        <div className="center">
          <h3 className="slogan">
            Waqt Aa Gaya Hai <span className="brand-name">Laxmi Basmati</span>
            Ko Ghar Lane Ka
          </h3>
          <button className="slider-btn">
            <span className="slider-btntext">Explore</span>
          </button>
        </div>

        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <div className="circle">
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
