"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/page";
import { ProductCard } from "@/components/ProductCard";
const page = () => {
  const [products, setProducts] = useState([]);

  const local_token = localStorage.getItem("token");
  // console.log(local_token)

  useEffect(() => {
    const getUserProducts = async () => {
      const response = await axios.post(
        "http://127.0.0.1:8000/get-user-list/",
        {
          token: local_token,
        }
      );

      const data = response.data;
      //console.log(data)
      setProducts(data);
    };
    getUserProducts();
  }, []);

  //console.log(products);
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {products.map((product: Product, index: number) => (
          <div className="mt-4 mb-4">
            <ProductCard item={product} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
