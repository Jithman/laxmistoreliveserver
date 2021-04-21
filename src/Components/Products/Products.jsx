import React from "react";
import Card from "./ProductsCard";
import Button from "../Buttons/Button";

import { ProductsData } from "./ProductsData";

import "./Products.css";

function createCard(ProductsData) {
  return (
    <Card
      key={ProductsData.id}
      name={ProductsData.name}
      img={ProductsData.image}
    />
  );
}

const Products = () => {
  return (
    <section className="section-heading">
      <h1>OUR PRODUCTS</h1>
      <div className="products-container">{ProductsData.map(createCard)}</div>

      <Button btnName="View All Products" />
    </section>
  );
};

export default Products;

// {ProductsData.map((data, index) => {
//     return (
//       <div className="products-container">
//         <div className="products-img">
//           <img src={data.image} alt={data.name} key={index} />
//         </div>
//         <div className="products-name">
//           <p>{data.name}</p>
//         </div>
//       </div>
//     );
//   })}
