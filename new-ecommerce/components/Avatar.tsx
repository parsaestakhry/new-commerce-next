import { useInfoStore } from "@/store/zustand";
import { User } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const Avatar = () => {
  const username = localStorage.getItem('username')
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-resolution-blue-50 btn-circle  w-36 bg-black text-slate-100  ml-3">
          welcome {username}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-resolution-blue-300 rounded-box w-52"
        >
          <li>
            <a className=" text-black-950">Logout</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
