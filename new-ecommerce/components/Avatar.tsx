import { useInfoStore } from "@/store/zustand";
import { User } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const Avatar = () => {
  const username = localStorage.getItem('username')
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-purple-400 text-gray-950 ml-3 hover:bg-purple-900">
          welcome {username}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
