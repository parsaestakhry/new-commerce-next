"use client";

import { Product } from "@/app/page";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params }: { params: { productId: number } }) => {
  const product_id = params.productId;
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    const getProduct = async() => {
      const response = await axios.get(`http://127.0.0.1:8000/get-product/${product_id}/`);
      setProduct(await response.data)
    }
    getProduct();
  }, [])
  

  return <div></div>;
};

export default page;
