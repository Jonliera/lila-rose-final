import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import About from "@/components/About";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <About />
      <div className="aboutUs flex justify-center mt-4">
        <Link href="/">
          <span className="aboutUs__link text-xl font-semibold border-b-2 border-gray-500 hover:border-gray-700">
            &larr; Back to Home
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
