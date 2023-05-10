import React from "react";

const Card = (Product: any) => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={Product.imageSrc} alt="Hats" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Product.title} </h2>
        <p>{Product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
