import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { Triangle } from "react-loader-spinner";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
//   console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
