"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { CategoryItem } from "./NavBar";

export const CategoryDropDown = (props: any) => {
  const [up, setUp] = useState(false);
  const categories = props.categories;

  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn btn-ghost" onClick={() => setUp(!up)}>
          {up ? (
            <CaretUp size={20} weight="bold" />
          ) : (
            <CaretDown size={20} weight="bold" />
          )}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-800 rounded-box w-52">
          {categories.map((item: CategoryItem, index: number) => (
            <div key={index} className="btn btn-ghost mt-2 text-slate-100">
              {item.name}
            </div>
          ))}
        </ul>
      </details>
    </div>
  );
};
