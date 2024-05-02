"use client";
import { ShoppingCart } from "./ShoppingCart";
import { Avatar } from "./Avatar";
import { SearchBox } from "./SearchBox";
import { MobileDrawer } from "./MobileDrawer";
import { Storefront } from "@phosphor-icons/react/dist/ssr";
import { CategoryDropDown } from "./CategoryDropDown";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export interface CategoryItem {
  id: number;
  name: string;
  pic: string;
}

export const NavBar = () => {
  const [categories, setCategories] = useState<Object>([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:8000/get-categories/");
      const data = await response.json();
      //console.log(data)
      setCategories(data);
    };
    getData();
    //console.log(categories)
  }, []);

  //console.log(categories);
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex-1">
          <a
            className="btn btn-ghost text-xl sm:flex hidden"
            onClick={() => router.push("/")}
          >
            <Storefront weight="bold" size={32} color="#d6d6d6" />
          </a>
          <div className="hidden sm:flex">
            <CategoryDropDown categories={categories} />
          </div>

          <div className="sm:hidden">
            <MobileDrawer categories={categories} />
          </div>
          <div className="mx-auto">
            <SearchBox />
          </div>
        </div>
        <div className="flex">
          <ShoppingCart />
          <Avatar />
        </div>
      </div>
    </div>
  );
};
