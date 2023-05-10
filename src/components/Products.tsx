import Card from "./Card";
import { useEffect, useState } from "react";
import { supabase } from "../components/supabase";

interface Product {
  created_at: string | null;
  id: number;
  ImageSrc: string | null;
  Price: string | null;
  Title: string | null;
}

const Products = () => {
  const [productsInfo, setProductsInfo] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("hats_info").select("*");
      if (error) throw error;
      setProductsInfo(data);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="max-w-21 mx-auto py-16 px-4 sm:py-24 sm:px-6">
      <h1 id="styles" className="text-4xl font-bold mb-8 text-center">
        Our Hats
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            productsInfo.map((product: Product) => (
              <Card
                key={product.id}
                title={product.Title}
                price={product.Price}
                imageSrc={product.ImageSrc}
              />
            ))
          )}
        </>
        <Card />
      </div>
    </div>
  );
};

export default Products;
