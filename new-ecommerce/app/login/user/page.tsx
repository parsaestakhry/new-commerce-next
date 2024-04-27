"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/page";
import { ProductCard } from "@/components/ProductCard";
import { UserProductCard } from "@/components/UserProductCard";
import { useAmountStore } from "@/store/zustand";
export interface Purchase {
  id: number;
  product_amount: number;
  purchase_id: number;
  product_id: number;
  purchase_amount: number;
}
const page = () => {
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const local_token = localStorage.getItem("token");
  const count = useAmountStore((state) => state.count);
  const setCount = useAmountStore((state) => state.setCount);
  const setTotal = useAmountStore((state) => state.setTotal);
  const total = useAmountStore((state) => state.total);
  // setCount(2);
  // console.log(local_token)

  useEffect(() => {
    const getUserProducts = async () => {
      const response = await axios.post(
        "http://127.0.0.1:8000/get-user-list/",
        {
          token: local_token,
        }
      );

      const data = await response.data;
      //console.log(data)
      setPurchases(data);
    };
    getUserProducts();
  }, []);

  useEffect(() => {
    const sumProductAmounts = () => {
      let totalAmount = 0;
      for (const purchase of purchases) {
        totalAmount += purchase.product_amount;
      }
      setCount(totalAmount);
    };

    sumProductAmounts();
  }, [purchases]);

  useEffect(() => {
    const sumPurchaseAmounts = () => {
      let totalPurchaseAmount = 0;
      for (const purchase of purchases) {
        totalPurchaseAmount += parseFloat(purchase.purchase_amount);
      }
      setTotal(totalPurchaseAmount);
    };

    sumPurchaseAmounts();
  }, [purchases, setTotal]);

  //console.log(total)

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {purchases.map((item: Purchase, index: number) => (
          <div className="mt-4 mb-4">
            <UserProductCard item={item} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
