import React from "react";
import clas from "../assets/class.png";
import playImg from "../assets/playground.png";
import swim from "../assets/swimming.png";
const Qzone = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Q-zone</h2>
      <div>
        <img src={swim} alt="" />
        <img src={playImg} alt="" />
        <img src={clas} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
