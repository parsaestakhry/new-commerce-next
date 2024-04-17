"use client";
import axios from "axios";
import React from "react";

const page = () => {
  const handleRequest = async () => {
    try {
      // Set axios defaults for credentials
      axios.defaults.withCredentials = true;

      const response = await axios.get("http://127.0.0.1:8000/get-user-list/");
      console.log(response);

      // Assuming the backend sends cookies in the response
      // You can extract and store these cookies if needed
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="btn btn-primary" onClick={() => handleRequest()}>
      click me
    </div>
  );
};

export default page;
