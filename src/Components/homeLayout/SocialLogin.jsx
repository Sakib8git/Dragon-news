import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignin } = use(AuthContext);
  const handleGoogleSignin = () => {
    console.log("object");
    googleSignin()
      .then((result) => {
        alert("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Login With</h2>
      <div className=" flex flex-col space-y-3">
        <button
          onClick={handleGoogleSignin}
          className=" btn btn-outline btn-secondary "
        >
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
