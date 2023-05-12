import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">
          <h1 id="about" className="text-4xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg">
            Welcome to our online store! We are dedicated to providing you with
            the best selection of hats for any occasion. Whether you're looking
            for a stylish accessory or protection from the sun, we have the
            perfect hat for you.
          </p>
          <p className="text-lg mt-4">
            Our team of hat enthusiasts carefully curates each product, ensuring
            the highest quality and latest trends. We prioritize customer
            satisfaction and aim to provide a seamless shopping experience.
          </p>
          <p className="text-lg mt-4">
            Explore our collection and find your perfect hat today!
          </p>
          <div className="mt-8">
            <iframe
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed/v1/place?q=epiccodus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
