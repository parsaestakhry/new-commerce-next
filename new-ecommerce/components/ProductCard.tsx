import { Product } from "@/app/page";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { useAmountStore } from "@/store/zustand";
import { SuccessAlert } from "./SuccessAlert";
import { useRouter } from "next/navigation";
export const ProductCard = ({ item }: { item: Product }) => {
  const [text, setText] = useState<string>("add to cart");
  const [amount, setAmount] = useState<number>(0);
  const setAdded = useAmountStore((state) => state.setAdded);
  const local = "http://127.0.0.1:8000/";
  const router = useRouter();
  const token = localStorage.getItem("key");
  const handleAddCart = async () => {
    if (amount > 0) {
      const response = await axios.post(
        `http://127.0.0.1:8000/add-multiple-list/${item.id}/${amount}/`,
        {
          token: localStorage.getItem("token"),
        }
      );
      console.log(response);

      setText("added to cart");
      setTimeout(() => window.location.reload(), 200);
    } else {
      setText("please enter amount");
    }
    setAdded(true);
  };

  const handleAmount = (event: any) => {
    setAmount(event.target.value);
  };

  //console.log(amount)
  return (
    <div>
      <div className="hidden sm:flex">
        <div className="card w-80 bg-gradient-to-r from-slate-500 to-gray-700 shadow-xl mx-2">
          <figure>
            <Image
              src={local + item.pic}
              alt="Shoes"
              width={400}
              height={400}
              className="object-cover h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-slate-200 font-sans  text-xl">
              {item.name}
              <div className="badge badge-secondary bg-slate-300 border-none font-sans h-7">
                <div className="my-3">{item.category}</div>
              </div>
            </h2>
            <p className="text-slate-200">{item.description}</p>
          </div>
          <div className="flex  justify-center space-x-2">
            <button
              className="btn  bg-black border-none text-slate-100 mb-2 w-22 "
              onClick={() => handleAddCart()}
            >
              {text}
            </button>

            <input
              type="text"
              placeholder="count"
              className="input input-bordered w-20 input-ghost text-start text-sm text-slate-100 border-3 border-slate-700"
              onChange={() => handleAmount(event)}
            />
            <button
              onClick={() => router.push(`/products/${item.id}/`)}
              className="btn bg-slate-900 text-slate-100 mr-3 w-22"
            >
              look
            </button>
          </div>
        </div>
      </div>

      {/* for smaller displays */}
      <div className="flex sm:hidden mt-2 mb-2">
        <div className="card w-80 bg-gradient-to-r from-slate-500 to-gray-700 shadow-xl mx-2">
          <figure>
            <Image
              src={local + item.pic}
              alt="Shoes"
              width={400}
              height={400}
              className="object-cover h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-slate-200 font-sans  text-xl">
              {item.name}
              <div className="badge badge-secondary bg-slate-300 border-none font-sans h-7">
                <div className="my-3">{item.category}</div>
              </div>
            </h2>
            <p className="text-slate-200">{item.description}</p>
          </div>
          <div className="flex  justify-center space-x-2">
            <button
              className="btn  bg-black border-none text-slate-100 mb-2 w-22 "
              onClick={() => handleAddCart()}
            >
              {text}
            </button>

            <input
              type="text"
              placeholder="count"
              className="input input-bordered w-20 input-ghost text-start text-sm text-slate-100 border-3 border-slate-700"
              onChange={() => handleAmount(event)}
            />
            <button
              onClick={() => router.push(`/products/${item.id}/`)}
              className="btn bg-slate-900 text-slate-100 mr-3 w-22"
            >
              look
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
