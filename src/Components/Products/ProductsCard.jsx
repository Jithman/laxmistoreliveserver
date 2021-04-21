import React from "react";
import "./Products.css";

const ProductsCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="products-img" />
      <div className="products-name">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default ProductsCard;
