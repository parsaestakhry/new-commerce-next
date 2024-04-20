"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState({});

  const local_token = localStorage.getItem("token");
  // console.log(local_token)

  useEffect(() => {
    const getUserProducts = async () => {
      const response = await axios.post(
        "http://127.0.0.1:8000/get-user-list/",
        {
          token: local_token,
        }
      );

      const data = response.data;
      //console.log(data)
      setProducts(data);
    };
    getUserProducts();
  }, []);

  console.log(products);
  return (
    <div className="btn btn-primary" >
      click me
    </div>
  );
};

export default page;
