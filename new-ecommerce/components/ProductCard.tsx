import { Product } from "@/app/page";
import Image from "next/image";
export const ProductCard = ({ item } : {item : Product}) => {
    const local = "http://127.0.0.1:8000/";
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
          <button className="btn btn-ghost mb-2 w-24 mx-auto">hello</button>
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
          <button className="btn btn-ghost mb-2 w-24 mx-auto">hello</button>
        </div>
      </div>
    </div>
  );
}
