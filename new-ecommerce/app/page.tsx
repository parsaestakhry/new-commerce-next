"use client";

import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore, useCategoryStore } from "@/store/zustand";
import { useTokenStore } from "@/store/zustand";

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

  const { fetch: fetchApi }: any = useCategoryStore();
  const { categories }: any = useCategoryStore();

  console.log(localStorage.getItem('token'))

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(categories);
  return (
    <>
      <div className="sm:flex space-x-2  justify-center hidden flex-wrap">
        {products.map((item: Product, index: number) => (
          <div className="mt-4 mb-4">
            <ProductCard item={item} key={index} />
          </div>
        ))}
      </div>

      <div className="sm:hidden flex flex-wrap justify-center">
        {products.map((item: Product, index: number) => (
          <div className="mt-2 mb-2">
            <ProductCard item={item} key={index} />
          </div>
        ))}
      </div>
      {/* <button className="btn btn-primary" onClick={() => handleAdd()}>
        inc {cart}
      </button> */}
      {/* <button
        onClick={async () => {
          await fetchApi();
          setIsSet(true);
        }}
      >
        {" "}
        Fetch
      </button> */}
    </>
  );
}
