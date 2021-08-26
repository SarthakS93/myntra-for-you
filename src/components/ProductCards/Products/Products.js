import React from "react";
import "./Products.scss";
import { products } from "../../../data/products";
import ProductCard from "./ProductCard";

const Products = (props) => {

  let title = props.title;
  if (title === undefined) {
    title = "You may like";
  }

  let products = props.productList;
  if (products === null || products === undefined) {
    products = [];
    title = "";
  }

  

  return (
    <div className="wrapper">
      <div className="products">
        <p className="card-title">{title}</p>
        <div className="items">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Products;
