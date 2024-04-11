import { User } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const Avatar = () => {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full p-1">
            <User size={30} weight="bold" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>

          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
