"use client";
import React from "react";
import { useState } from "react";
import { json } from "stream/consumers";
export const LoginArtBoard = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [token, setToken] = useState({});
  const handleUserNameInput = (event: any) => {
    setUserName(event.target.value);
  };

  const handlePassWordInput = (event: any) => {
    setPassWord(event.target.value);
  };

  const handleLogin = async () => {
    fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: passWord,
      }),
    })
      .then((res) => res.json())
      .then((json) => setToken(json));
  };

  console.log(token)

  //   console.log(userName)
  //   console.log(passWord)
  return (
    <div className="artboard phone-3 bg-black rounded-sm items-center">
      <div className="flex justify-center font-black text-slate-100 p-10 text-xl">
        Username
      </div>
      <label className="input input-bordered flex items-center gap-2 mx-10 mb-2 bg-black border-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Username"
          onChange={handleUserNameInput}
        />
      </label>
      <div className="flex justify-center font-black text-slate-100 p-10 text-xl">
        Password
      </div>
      <label className="input input-bordered flex items-center gap-2 mx-10 bg-black border-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          onChange={handlePassWordInput}
        />
      </label>
      <div
        className="btn btn-primary mt-10 flex mx-3"
        onClick={() => handleLogin()}
      >
        login
      </div>
    </div>
  );
};
