import { useInfoStore } from "@/store/zustand";
import { User } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React from "react";

export const Avatar = () => {
  const username = localStorage.getItem('username')
  const router = useRouter()
  const login = "login"
  const handleLogin = () => {
    if (username) {
      router.push("/login/user")
    }
    else {
      router.push("/login")
    }
  }
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div onClick={handleLogin} className="btn m-1 bg-resolution-blue-50 btn-circle w-24 bg-black text-slate-100  ml-3" >
        {username ? username : login}
        </div>
      </div>
    </div>
  );
};
