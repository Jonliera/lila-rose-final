import React from "react";

const Hero = () => {
  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero__content hero-content text-center mt-10">
        <div className="hero__content-inner max-w-lg">
          <h1 className="hero__heading text-5xl font-bold">
            Welcome to Lila & Rose
          </h1>
          <p className="hero__intro py-6">
            We are a small business that makes custom hats for all occasions. We
            have a wide variety of styles and colors to choose from. We also
            offer custom embroidery for your hat. We are located in the heart of
            downtown Hood River, Oregon. Come visit us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
