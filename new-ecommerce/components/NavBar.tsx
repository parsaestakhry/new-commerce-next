import React from "react";
import { ShoppingCart } from "./ShoppingCart";
import { Avatar } from "./Avatar";
import { SearchBox } from "./SearchBox";
import { MobileDrawer } from "./MobileDrawer";
import { Storefront } from "@phosphor-icons/react/dist/ssr";
import { CategoryDropDown } from "./CategoryDropDown";

export const NavBar = () => {
  return (
    <div>
      <div className="navbar  bg-slate-700">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl sm:flex hidden">
            <Storefront weight="bold" size={25} />
          </a>
          <div className="hidden sm:flex">
            <CategoryDropDown />
          </div>

          <div className="sm:hidden">
            <MobileDrawer />
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
