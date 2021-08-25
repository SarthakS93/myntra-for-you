import React from "react";

const ProductCard = (props) => {
  console.log(props);
  let productProperties = props.product;
  return (
    <div className="product">
    <img src={productProperties.image} alt={productProperties.name} />
    <div className="content">
      <div>
        <p className="card-title">{productProperties.name}</p>
        <p className="description">{productProperties.description}</p>
      </div>
      <div className="bottom-section">
        <p className="card-title">${productProperties.price}</p>
        <button className="button-main">Show Now</button>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
