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
        <div className="card w-80 bg-slate-500 shadow-xl mx-2">
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
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
          </div>
          <div className="flex justify-center">
            <button
              className="btn  bg-green-600 border-none text-slate-100 mb-2 w-24 mx-auto"
              onClick={() => handleAddCart()}
            >
              {text}
            </button>
            <input
              type="text"
              placeholder="count"
              className="input input-bordered w-20 input-ghost mr-10 text-start text-sm text-slate-100"
              onChange={() => handleAmount(event)}
            />
            <button onClick={() => router.push(`/products/${item.name}/`)} className="btn btn-primary mr-3">
              look
            </button>
          </div>
        </div>
      </div>

      {/* for smaller displays */}
      <div className="sm:hidden">
        <div className="card w-80 bg-slate-500 shadow-xl mx-2 mt-4 mb-4">
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
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
          </div>
          <button
            className="btn bg-green-600 mb-2 w-24 mx-auto"
            onClick={() => handleAddCart()}
          >
            Add to cart
            <ShoppingCart />
          </button>
          {/* <div className="mx-10">
            <input
              type="range"
              min={0}
              max="100"
              // value="25"
              className="range"
              step="10"
            />
            <div className="w-full flex justify-between text-xs mb-2 p-2">
              <span className="text-lg" onClick={() => setAmount(1)}>
                1
              </span>
              <span className="text-lg" onClick={() => setAmount(2)}>
                2
              </span>
              <span className="text-lg" onClick={() => setAmount(3)}>
                3
              </span>
              <span className="text-lg" onClick={() => setAmount(4)}>
                4
              </span>
              <span className="text-lg" onClick={() => setAmount(5)}>
                5
              </span>
              <span className="text-lg" onClick={() => setAmount(6)}>
                6
              </span>
              <span className="text-lg" onClick={() => setAmount(7)}>
                7
              </span>
              <span className="text-lg" onClick={() => setAmount(8)}>
                8
              </span>
              <span className="text-lg" onClick={() => setAmount(9)}>
                9
              </span>
              <span className="text-lg" onClick={() => setAmount(10)}>
                10
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
