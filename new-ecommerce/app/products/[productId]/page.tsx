"use client";

import { Product } from "@/app/page";
import { ProductBoard } from "@/components/ProductBoard";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }: { params: { productId: number } }) => {
  const product_id = params.productId;
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      setTimeout(() => {
        axios.get(`http://127.0.0.1:8000/get-product/${product_id}/`).then((response) => {
          setItem(response.data)
        })
      }, 2000);
    };
    getProduct();
  }, [item]);
  
  //console.log(product)

  return (
    <div>
      <ProductBoard item={item} />
    </div>
  );
};

export default page;
