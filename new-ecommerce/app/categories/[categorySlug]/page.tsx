"use client";
import { useEffect, useState } from "react";

const page = ({ params }: { params: { categorySlug: string } }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/get-products/`);
      const data = await response.json();
      console.log(data);
    //   console.log("hello");
    
    };
    getData();
  }, []);

  return <div>{params.categorySlug}</div>;
};

export default page;
