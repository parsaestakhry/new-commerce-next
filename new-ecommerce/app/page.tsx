"use client";

import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useAmountStore,
  useCartStore,
  useCategoryStore,
} from "@/store/zustand";
import { useTokenStore } from "@/store/zustand";
import { SuccessAlert } from "@/components/SuccessAlert";

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
  const added = useAmountStore((state) => state.added);
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://127.0.0.1:8000/get-products/`);
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  // useEffect(() => {
  //   if (added) {
  //     setShowAlert(true); // Show the alert if added is true

  //     // Set timeout to hide the alert after 3 seconds
  //     const timer = setTimeout(() => {
  //       setShowAlert(false);
  //     }, 3000);

  //     // Clear the timeout when component unmounts or when added changes
  //     return () => clearTimeout(timer);
  //   }
  // }, [added]);

  return (
    <>
      {/* {showAlert && <SuccessAlert />} Conditionally render SuccessAlert */}
      
      <div className="sm:flex space-x-2 justify-center hidden flex-wrap">
        {products.map((item: Product, index: number) => (
          <div className="mt-4 mb-4" key={index}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
      <div className="sm:hidden flex flex-wrap justify-center">
        {products.map((item: Product, index: number) => (
          <div className="mt-2 mb-2" key={index}>
            <ProductCard item={item} />
          </div>
        ))}
        
      </div>
    </>
  );
}

