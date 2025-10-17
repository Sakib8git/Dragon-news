import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Qzone from "../Qzone";
import Add from "../Add";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
