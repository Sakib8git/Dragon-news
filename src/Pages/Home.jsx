import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return <div className="text-secondary">HomePAge
  
   <Navigate to={"/category/1"}></Navigate> 
  </div>;
};

export default Home;
