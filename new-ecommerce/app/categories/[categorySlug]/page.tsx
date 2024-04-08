"use client";

import { useEffect, useState } from "react";

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
  }, [params.categorySlug]); // Trigger when categorySlug changes

  // Trigger when categoryId changes

  // console.log(categoryId);
  //console.log(products);

  return <div></div>;
};

export default Page;
