import React from "react";
import Image from "next/image";

import productLandingImg from "../../asset/pictures/landing/hero-product.png";
import paperTextureImg from "../../asset/pictures/paper-texture.jpg";

import RippedSVG from "../../asset/svgs/ripped";

const LandingHero = () => {
  return (
    <div
      className="w-screen h-screen bg-darkRed flex justify-center mb-1 relative overflow-hidden"
      style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute top-0 left-0 w-4/5 h-screen">
        <RippedSVG className="z-20 h-full w-full drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)]" />
      </div>
      <div className="w-4/5 flex z-10 justify-center items-center">
        <div className="flex items-start justify-center flex-col">
          <p className="text-white text-6xl font-bold leading-tight mb-10">
            100% HOME
            <br />
            COMPOSTABLE
            <br />
            PACKAGING
          </p>
          <a
            href="#"
            className="bg-ecoRed mb-5 text-skinCream font-bold text-3xl py-2 px-5 relative clip-path-right-triangle pr-10"
          >
            OUR CATALOG
          </a>
          <a
            href="#"
            className="bg-ecoRed mb-5 text-skinCream font-bold text-3xl py-2 px-5"
          >
            COSTUMIZE PRODUCT
          </a>
        </div>
        <div className="w-full h-4/5 relative">
          <Image
            src={productLandingImg}
            layout="fill"
            objectFit="contain"
            objectPosition={"right 10px"}
            alt="ECOPLEASE product"
            style={{ filter: "brightness(90%)" }}
          />
        </div>
      </div>
      <a
        href="#"
        className="absolute top-10 right-0 bg-black text-skinCream font-bold flex justify-start items-center pl-5 py-1 rounded-l-lg text-xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)] z-20 pr-20"
      >
        GET YOUR FREE SAMPLE NOW!
      </a>
    </div>
  );
};

export default LandingHero;
