"use client";
import { CategoryItem } from "@/components/NavBar";
import { useEffect, useState } from "react";

export interface Product {
  amount: number;
  category: string;
  date_created: string;
  description: string;
  id: number;
  name: string;
  pic: string;
  price: number;
  purchase: Array<number>;
}

const page = ({ params }: { params: { categorySlug: string } }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/get-products/`);
      const data = await response.json();
      //console.log(data);
      //   console.log("hello");
      const filteredProducts = data.filter(
        (product: Product) => product.category === params.categorySlug
      );
      setProducts(filteredProducts);
    };
    getData();
  }, []);

  console.log(products)

  return <div></div>;
};

export default page;
