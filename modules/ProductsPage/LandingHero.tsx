import React from "react";
import Image from "next/image";

import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import LandingBgImg from "../../asset/pictures/products/landing-bg.webp";

const LandingHero = () => {
  return (
    <>
      <a
        href="#"
        className="flex h-12 w-screen items-center justify-center bg-black text-lg font-bold uppercase text-skinCream xs:text-xl lg:text-2xl"
      >
        Request Sample Now
        <span>
          <IconContext.Provider value={{ className: "h-full ml-2" }}>
            <AiOutlineArrowRight />
          </IconContext.Provider>
        </span>
      </a>
      <div className="relative mb-1 flex w-screen">
        <div className="absolute -z-10 h-full w-full bg-ecoRed/40">
          <Image
            src={LandingBgImg}
            alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-10 py-24 px-10 xs:px-24 lg:py-32 lg:px-32">
          <p className="before:title-outline-skinCream relative z-0 text-left text-5xl font-bold uppercase leading-tight text-skinCream before:absolute before:top-1 before:-z-10 before:translate-x-1 before:text-darkRed before:content-['Your_eco_Journey_Starts_Here'] lg:text-6xl">
            Your Eco <br /> Journey <br /> Starts Here
          </p>
          <div className="flex flex-col gap-5 md:flex-row">
            {[
              ["Our Catalog", "#"],
              ["Customize Product", "#"],
            ].map((el, i) => (
              <a
                href={el[1]}
                className="w-fit rounded-md bg-white px-5 py-1 text-xl font-bold uppercase text-ecoRed transition-all duration-200 ease-out hover:scale-105 hover:bg-ecoRed hover:text-white hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] lg:text-2xl"
                key={i}
              >
                {el[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
