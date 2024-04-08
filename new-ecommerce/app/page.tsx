"use client";

import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  category: string;
  price: number;
  date_created: Date;
  amount: number;
  description: string;
  purchase: Array<number>;
}

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://127.0.0.1:8000/get-products/`);
      const data = await response.json();
      //console.log(data);
      setProducts(data)
    };
    getProducts();
  }, []);

  //console.log(products)

  return (
    <>
      {products.map((item : Product, index : number) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
}
