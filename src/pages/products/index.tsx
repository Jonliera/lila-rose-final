import React from "react";
import Products from "@/components/Products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <Products />
      <div className="flex justify-center mt-4">
        <Link href="/">
          <span className="text-xl font-semibold border-b-2 border-gray-500 hover:border-gray-700">
            &larr; Back to Home
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
