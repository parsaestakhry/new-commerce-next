"use client"

import { useEffect, useState } from "react";

const Page = ({ params }: { params: { categorySlug: string } }) => {
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState<number>();

  useEffect(() => {
    const getId = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/get-category-id/${params.categorySlug}/`
      );
      const data = await response.json();
      setCategoryId(data);
    };
    getId();
  }, [params.categorySlug]); // Trigger when categorySlug changes

  useEffect(() => {
    const getData = async () => {
      if (categoryId !== undefined) {
        // Check if categoryId is defined
        const response = await fetch(
          `http://127.0.0.1:8000/get-category-products/?category=${categoryId}`
        );
        const data = await response.json();
        setProducts(data);
      }
    };
    getData();
  }, [categoryId]); // Trigger when categoryId changes

  // console.log(categoryId);
  // console.log(products);

  return <div></div>;
};

export default Page;
