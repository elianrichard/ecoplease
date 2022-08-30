import React from "react";

import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingHero = () => {
  return (
    <>
      <a
        href="#"
        className="flex h-12 w-screen items-center justify-center bg-black text-2xl font-bold uppercase text-skinCream"
      >
        Request Sample Now
        <span>
          <IconContext.Provider value={{ className: "h-full ml-2" }}>
            <AiOutlineArrowRight />
          </IconContext.Provider>
        </span>
      </a>
      <div
        className="flex w-screen flex-col items-start justify-center gap-10 bg-darkRed py-32 px-32 mb-1"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
        }}
      >
        <p className="before:title-outline-skinCream relative z-0 text-6xl font-bold uppercase leading-tight text-skinCream before:absolute before:top-1 before:-z-10 before:translate-x-1 before:text-darkRed before:content-['Your_eco_Journey_Starts_Here']">
          Your Eco <br /> Journey <br /> Starts Here
        </p>
        <div className="flex gap-5">
          {[
            ["Our Catalog", "#"],
            ["Customize Product", "#"],
          ].map((el, i) => (
            <a
              href={el[1]}
              className="rounded-md bg-white px-5 py-1 text-2xl font-bold uppercase text-ecoRed"
              key={i}
            >
              {el[0]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingHero;
