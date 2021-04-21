import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn">
      <span className="btntext">{props.btnName}</span>
    </button>
  );
};

export default Button;
