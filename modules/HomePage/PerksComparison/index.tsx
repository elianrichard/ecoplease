import React from "react";

import Perks from "./Perks";
import Comparison from "./Comparison";

import backgroundImg from "../../../asset/pictures/home-bg.webp";

const PerksComparison = () => {
  return (
    <div
      className="relative z-0 mb-1 flex justify-center bg-darkRed py-20 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black/20"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "fill",
        backgroundPosition: "center center",
      }}
    >
      <div className="z-10 flex w-full flex-col items-center justify-center gap-20 px-5 lg:w-4/5 lg:px-0">
        <Perks />
        <Comparison />
      </div>
    </div>
  );
};

export default PerksComparison;
