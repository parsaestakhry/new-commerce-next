import { Product } from "@/app/page";
import { useRouter } from "next/navigation";
import { it } from "node:test";
import axios from "axios";
export const ProductBoard = (item: any) => {
  const local = "http://127.0.0.1:8000/";
  const router = useRouter();
  const handleAddCart = async () => {
    const response = await axios.post(
      `http://127.0.0.1:8000/add-multiple-list/${item.item.id}/1/`,
      {
        token: localStorage.getItem("token"),
      }
    );
    console.log(response);

    setTimeout(() => window.location.reload(), 200);
  };
  
  return (
    <div>
      <div className="card lg:card-side bg-black shadow-xl min-h-lvh">
        <figure>
          <img
            className="object-cover"
            src={local + item.item.pic}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-4xl">{item.item.name}</h2>
          <p className="text-3xl">{item.item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => handleAddCart()}>add to cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
