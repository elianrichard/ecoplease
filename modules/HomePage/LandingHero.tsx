import React from "react";
import Image from "next/image";

import productLandingImg from "../../asset/pictures/home/hero-product.png";
import paperTextureImg from "../../asset/pictures/paper-texture.jpg";

import RippedSVG from "../../asset/svgs/ripped/RippedLanding";

const LandingHero = () => {
  return (
    <div
      className={`relative mb-1 flex w-screen justify-center overflow-hidden bg-darkRed lg:h-screen`}
      style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute top-0 left-0 w-4/5 lg:h-screen">
        <RippedSVG className="z-20 hidden h-full w-full drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)] lg:block" />
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 py-32 lg:w-4/5 lg:flex-row lg:py-0">
        <div className="flex w-full flex-col items-center justify-center lg:items-start">
          <p className="mb-10 text-center text-4xl font-bold leading-snug text-white sm:text-5xl sm:leading-tight lg:text-left lg:text-6xl lg:leading-snug">
            100% HOME
            <br />
            <span className="bg-white px-5 text-darkRed">COMPOSTABLE</span>
            <br />
            PACKAGING
          </p>
          <a
            href="#"
            className="clip-path-triangle relative mb-5 bg-skinCream py-2 px-10 text-center text-2xl font-bold text-darkRed transition-all duration-200 ease-out hover:px-16 lg:bg-ecoRed lg:text-3xl lg:text-skinCream lg:hover:pl-16 lg:hover:text-white"
          >
            OUR CATALOG
          </a>
          <a
            href="#"
            className="clip-path-triangle relative mb-5 bg-skinCream py-2 px-10 text-center text-2xl font-bold text-darkRed transition-all duration-200 ease-out hover:px-16 lg:bg-ecoRed lg:text-3xl lg:text-skinCream lg:hover:pl-16 lg:hover:text-white"
          >
            COSTUMIZE PRODUCT
          </a>
        </div>
        <div className="relative flex h-96 w-full items-center justify-center lg:h-4/5">
          <Image
            src={productLandingImg}
            layout="fill"
            objectFit="contain"
            alt="ECOPLEASE product"
            style={{ filter: "brightness(90%)" }}
            className="lg:object-right-[10px] object-center"
          />
        </div>
      </div>
      <a
        href="#"
        className="absolute top-0 right-0 z-20 flex w-full items-center justify-center bg-black py-5 pl-5 pr-5 text-center text-xl font-bold text-skinCream shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)] lg:top-10 lg:w-auto lg:justify-start lg:rounded-l-lg lg:py-1 lg:pr-20"
      >
        GET YOUR FREE SAMPLE NOW!
      </a>
    </div>
  );
};

export default LandingHero;
