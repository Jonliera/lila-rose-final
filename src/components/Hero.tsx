import React from "react";

const Hero = () => {
  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Lila & Rose </h1>
          <p className="py-6">
            We are a small business that makes custom hats for all occasions. We
            have a wide variety of styles and colors to choose from. We also
            offer custom embroidery for your hat. We are located in the heart of
            downtown Hood River, Oregon. Come visit us today!
          </p>
          <button className="btn btn-primary">Hats</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
