"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { CategoryItem } from "./NavBar";
import { useRouter } from "next/navigation";

export const CategoryDropDown = (props: any) => {
  const [up, setUp] = useState(false);
  const categories = props.categories;
  const router = useRouter();

  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn btn-ghost" onClick={() => setUp(!up)}>
          {up ? (
            <CaretUp size={22} weight="bold" color="#d6d6d6" />
          ) : (
            <CaretDown size={22} weight="bold" color="#d6d6d6" />
          )}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-800 rounded-box w-52">
          {categories.map((item: CategoryItem, index: number) => (
            <div
              key={index}
              className="btn btn-ghost mt-2 text-slate-100"
              onClick={() => router.push(`/categories/${item.name}`)}
            >
              {item.name}
            </div>
          ))}
        </ul>
      </details>
    </div>
  );
};
