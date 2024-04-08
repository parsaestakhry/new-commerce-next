"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/page";
import { ProductCard } from "@/components/ProductCard";
const Page = ({ params }: { params: { categorySlug: string } }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoryIdProducts = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/get-category-id/${params.categorySlug}/`
      );
      const data = await response.json();
      //console.log(data)
      setProducts(data);
    };
    getCategoryIdProducts();
  }, []); // Trigger when categorySlug changes

  // Trigger when categoryId changes

  // console.log(categoryId);
  //console.log(products);

  return (
    <div>
      <div className="sm:flex space-x-2  justify-center hidden flex-wrap">
        {products.map((item: Product, index: number) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>

      <div className="sm:hidden flex flex-wrap justify-center">
        {products.map((item: Product, index: number) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
