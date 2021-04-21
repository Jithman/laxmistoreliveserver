import React from "react";
import LeftImg from "../../Images/imgleft.png";
import RightImg from "../../Images/imgright.png";
import Design from "../../Images/path.svg";

import { AiOutlineSearch } from "react-icons/ai";
import "./Locate.css";

const Locate = () => {
  return (
    <div class="locate-container">
      <div className="locate-left">
        <img src={RightImg} alt="paratha" />
      </div>

      <div className="locate-content">
        <h1 className="locate-title">LOCATE US</h1>
        <div className="logo">
          <img src={Design} alt="design" className="locate-logo" />
        </div>
        <p>Find variety of products near by you</p>

        <div class="search-container">
          <input
            type="text"
            placeholder="     Enter your City Name or Zip Code"
          />
          <button type="submit" className="locate-btn">
            <span className="locate-search-logo">
              <AiOutlineSearch size={14} />
            </span>
            <span className="locate-btnName">Find A Store</span>
          </button>
        </div>
      </div>

      <div className="locate-right">
        <img src={LeftImg} alt="" ricebowl />
      </div>
    </div>
  );
};

export default Locate;
