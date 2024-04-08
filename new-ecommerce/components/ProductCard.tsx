import { Product } from "@/app/page";
export const ProductCard = ({ item } : {item : Product}) => {
    const local = "http://127.0.0.1:8000/";
  return (
    <div>
      <div className="card w-80 bg-black shadow-xl mt-5">
        <figure>
          <img
            src={local + item.pic}
            alt="Shoes"
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
  );
}
