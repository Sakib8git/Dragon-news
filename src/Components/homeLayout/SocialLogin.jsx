import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Login With</h2>
      <div className=" flex flex-col space-y-3">
        <button className=" btn btn-outline btn-secondary ">
          {" "}
          <FcGoogle size={24} />
          Login With Google
        </button>
        <button className=" btn btn-outline btn-primary ">
          <IoLogoGithub size={24} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
