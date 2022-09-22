import React from "react";
import Image from "next/image";

import LandingProductImg from "../../asset/pictures/materials/landing-hero.webp";
import PaperTextureImg from "../../asset/pictures/paper-texture.webp";

const LandingHero = () => {
  return (
    <div className="relative flex h-fit w-screen flex-col-reverse items-center justify-center gap-16 px-10 py-20 md:h-[calc(100vh-64px)] md:flex-row md:gap-14 lg:px-20 xl:px-32">
      <div className="absolute -z-10 h-full w-full bg-darkRed">
        <Image
          src={PaperTextureImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
          priority
        />
      </div>
      <div className="flex-1 text-skinCream">
        <h1 className="before:title-outline-skinCream relative mb-5 text-4xl font-bold uppercase before:absolute before:top-[2.5px] before:translate-x-[2.5px] before:text-darkRed before:content-['Made_with_natural_plant_fiber'] lg:text-5xl lg:before:top-1 lg:before:translate-x-1">
          Made With Natural Plant Fiber
        </h1>
        <p className="text-base lg:text-lg">
          Ecoplease believe in natural and renewable materials. Our company only
          use materials that can be harvested, replenished and regenerated
          without any adverse effect on environment.
        </p>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="relative w-60 xs:w-72 lg:w-96">
          <Image
            src={LandingProductImg}
            layout="responsive"
            alt="ecoplease product"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
