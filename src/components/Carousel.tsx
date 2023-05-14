import React from "react";

const Carousel = () => {
  return (
    <div className="carousel flex items-center justify-center bg-base-200">
      <div className="carousel_container carousel w-6/12">
        <div
          id="slide1"
          className="carousel__item carousel-item relative w-full"
        >
          <img
            src="https://images.unsplash.com/uploads/1411068785961ec3bb1a3/4662610e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            className="carousel__image w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="carousel__btn carousel__btn btn btn-circle"
            >
              ❮
            </a>
            <a href="#slide2" className="carousel__btn btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel__item carousel-item relative w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
            className="carousel__image w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="carousel__btn btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="carousel__btn btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel__item carousel-item relative w-full"
        >
          <img
            src="https://img.freepik.com/free-photo/pretty-mixed-race-woman-with-short-hair-autumn-outwear-hat_633478-1964.jpg?w=2000&t=st=1683917642~exp=1683918242~hmac=33e1f0abbedd441efa4a155879aefe0f77bb2e9021ec1f75948b60d891df17d2"
            className="carousel__image w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="carousel__btn btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="carousel__btn btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel__item carousel-item relative w-full"
        >
          <img
            src="https://img.freepik.com/free-photo/front-view-smiley-woman-wearing-hat_23-2149729300.jpg?w=2000&t=st=1683917757~exp=1683918357~hmac=55def6251b07213ba9c4308380ffc2f6f8abc115b30b19bafed38ab3861bf949"
            className="carousel__image w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="carousel__btn btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="carousel__btn btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
