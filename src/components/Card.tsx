import React from "react";

const Card = (Product: any) => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl card_small">
      <figure className="card__figure">
        <img src={Product.imageSrc} alt="Hats" className="card__image" />
      </figure>
      <div className="card__body">
        <h2 className="card__title">{Product.title} </h2>
        <p className="card__price">{Product.price}</p>
        <div className="card__actions justify-end">
          <button className="card__btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
