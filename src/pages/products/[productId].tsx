import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../components/supabase";
import Link from "next/link";

interface Product {
  created_at: string | null;
  id: number;
  ImageSrc: string | null;
  Price: string | null;
  Title: string | null;
  Description: string | null;
}

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("hats_info")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error: any) {
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="productsDetails max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="products_Details__info flex flex-col md:flex-row items-center">
        <div className="">
          {product.ImageSrc && (
            <img
              className="productsDetail__image h-96 w-auto"
              src={product.ImageSrc}
              alt={product.Title || ""}
            />
          )}
        </div>
        <div className="productsDetails__spacing md:ml-6 mt-4 md:mt-0">
          <h2 className="productsDetails__title text-3xl font-bold mb-2">
            {product.Title || ""}
          </h2>
          <p className="productsDetails__price text-2xl mb-4">
            {product.Price || ""}
          </p>
          <p className="tproductsDetails__description text-lg mb-4">
            {product.Description || ""}
          </p>
        </div>
      </div>
      <div className="productsDetails__link flex justify-center mt-4">
        <Link href="/products">
          <span className="productsDetails__btn text-xl font-semibold border-b-2 border-gray-500 hover:border-gray-700">
            &larr; Back to Products
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
