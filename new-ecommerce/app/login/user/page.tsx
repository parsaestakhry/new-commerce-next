"use client";
import axios from "axios";
import React from "react";

const page = () => {
  const token = localStorage.getItem('token')
  console.log(token)
  return <div className="btn btn-primary">click me</div>;
};

export default page;
