import { Product } from "@/app/page";
export const ProductBoard = (item : any) => {
  return (
    <div>
      <div className="card lg:card-side bg-black shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.item.name}</h2>
          <p>{item.item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">add to cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
