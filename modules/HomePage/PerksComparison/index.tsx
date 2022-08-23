import React from "react";

import Perks from "./Perks";
import Comparison from "./Comparison";

import backgroundImg from "../../../asset/pictures/landing/home-background-1.png";

const PerksComparison = () => {
  return (
    <div
      className="py-20 bg-darkRed flex justify-center mb-1 before:w-full before:h-full before:bg-black/20 before:absolute relative before:top-0 before:left-0 z-0"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "fill",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex justify-center items-center flex-col w-4/5 gap-20 z-10">
        <Perks />
        <Comparison />
      </div>
    </div>
  );
};

export default PerksComparison;
