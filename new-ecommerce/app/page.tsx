"use client";

import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore, useCategoryStore } from "@/store/zustand";
export interface Product {
  id: number;
  category: string;
  price: number;
  date_created: Date;
  amount: number;
  description: string;
  purchase: Array<number>;
  name: string;
  pic: string;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://127.0.0.1:8000/get-products/`);
      const data = await response.json();
      //console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const { add: handleAdd, cart } = useCartStore();
  const { fetch: fetchApi } = useCategoryStore();
  const { categories } = useCategoryStore();
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    fetchApi();
    console.log(categories);
  }, []);

  return (
    <>
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
      <button className="btn btn-primary" onClick={() => handleAdd()}>
        inc {cart}
      </button>
      <button
        onClick={async () => {
          await fetchApi();
          setIsSet(true);
        }}
      >
        {" "}
        Fetch
      </button>
    </>
  );
}
