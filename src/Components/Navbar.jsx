import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    // console.log("object");
    logout()
      .then(() => {
        alert("successfully logedOut")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
    </>
  );
  return (
    <div className="flex justify-between items-center pt-5 ">
      <div className="">{user && <p>{user.email}</p>}</div>
      <div className="nav flex gap-5 text-accent">{links}</div>
      <div className="login-btn flex items-center gap-5">
        <img src={userImg} alt="" />

        {user ? (
          <button
            onClick={handleLogout}
            to="/auth/login"
            className="btn btn-primary"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
