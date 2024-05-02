"use client";

import { useAmountStore } from "@/store/zustand";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ShoppingCart = () => {
  const count = useAmountStore((state) => state.count);
  const total = useAmountStore((state) => state.total);
  const router = useRouter();
  const [cartCount, setCartCount] = useState<any>();
  const [purchaseAmount, setPurchaseAmount] = useState<any>();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getCart = async () => {
      if (token) {
        const response = await axios.post(
          `http://127.0.0.1:8000/calculate-cart/`,
          {
            token: token,
          }
        );
        const data = response.data;
        //console.log(data)
        setCartCount(data.product_count);
        setPurchaseAmount(data.purchase_amount);
      }
      
      
    };
    getCart();
  }, []);

  //console.log(cartCount)
  // console.log(purchaseAmount)
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle w-22  bg-black"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{cartCount}</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-5 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md"
        >
          <div className="card-body">
            <span className="font-bold text-lg text-slate-100">{cartCount} Items</span>
            <span className="text-sky-300">Subtotal: ${purchaseAmount}</span>
            <div className="card-actions">
              <button
                className="btn  bg-black btn-block"
                onClick={() => router.push("/login/user/")}
              >
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
