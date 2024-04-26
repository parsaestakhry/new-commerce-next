import { Product } from "@/app/page";
import axios from "axios";
import Image from "next/image";
import { it } from "node:test";

export const UserProductCard = ({ item }: { item: Product }) => {
  const local = "http://127.0.0.1:8000/";
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
  return (
    <div>
      <div className="hidden sm:flex">
        <div className="card w-80 bg-slate-700 shadow-xl mx-2">
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
          <button className="btn btn-ghost mb-2 w-24 mx-auto">Check out</button>
          <button className="btn btn-ghost mb-2 w-24 mx-auto">Check out</button>
        </div>
      </div>
    </div>
  );
};
