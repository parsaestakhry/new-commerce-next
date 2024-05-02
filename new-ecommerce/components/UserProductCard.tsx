import { Purchase } from "@/app/login/user/page";
import { Product } from "@/app/page";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export const UserProductCard = ({ item }: { item: Purchase }) => {
  const local = "http://127.0.0.1:8000/";
  const [product, setProduct] = useState<Product | null>(null); // Define type as Product | null

  const handleRemoveCart = async () => {
    const response = await axios.delete(
      `http://127.0.0.1:8000/remove-from-list/${item.id}/`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          token: localStorage.getItem("token"),
        },
      }
    );

    window.location.reload();
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/get-product/${item.product_id}/`
      );
      const data: Product = await response.data; // Define data as Product
      setProduct(data);
    };
    getProduct();
  }, []);

  if (!product) return null; // Handling null case to avoid rendering errors
  

  return (
    <div>
      <div className="hidden sm:flex">
        <div className="card w-80 bg-gradient-to-r from-slate-500 to-gray-700 shadow-xl mx-2">
          <figure>
            <Image
              src={local + product.pic}
              alt="Shoes"
              width={400}
              height={400}
              className="object-cover h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-slate-200 font-sans  text-xl">
              {product.name} amount : {item.product_amount}
              <div className="badge badge-secondary bg-slate-300 border-none font-sans h-7">
                {product.category}
              </div>
            </h2>
            <p className="text-slate-100 text-xl">{product.description}</p>
          </div>
          <div className="flex">
            <button className="btn btn-ghost mb-2 w-24 mx-auto">
              Check Out
            </button>
            <button
              onClick={() => handleRemoveCart()}
              className="btn bg-red-500 border-none text-slate-100 mb-2 w-24 mx-auto"
            >
              remove
            </button>
          </div>
        </div>
      </div>

      {/* for smaller displays */}
      <div className="sm:hidden">
        <div className="card w-80 bg-slate-700 shadow-xl mx-2 mt-4 mb-4">
          <figure>
            <Image
              src={local + product.pic}
              alt="Shoes"
              width={400}
              height={400}
              className="object-cover h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.name}
              <div className="badge badge-secondary">{product.category}</div>
            </h2>
            <p>{product.description}</p>
          </div>
          <button className="btn btn-ghost mb-2 w-24 mx-auto">Check out</button>
          <button className="btn btn-ghost mb-2 w-24 mx-auto">Check out</button>
        </div>
      </div>
    </div>
  );
};
