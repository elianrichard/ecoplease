import React from "react";
import Image from "next/image";

import LandingProductImg from "../../asset/pictures/materials/landing-hero.png";
import PaperTextureImg from "../../asset/pictures/paper-texture.jpg";

const LandingHero = () => {
  return (
    <div
      className="flex h-[calc(100vh-64px)] w-screen items-center justify-center gap-14 bg-darkRed px-32 py-20"
      style={{
        backgroundImage: `url(${PaperTextureImg.src})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex-1 text-skinCream">
        <p className="before:title-outline-skinCream relative mb-5 text-5xl font-bold uppercase before:absolute before:top-1 before:translate-x-1 before:text-darkRed before:content-['Made_with_natural_plant_fiber']">
          Made With Natural Plant Fiber
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          facilis molestiae consequatur velit ducimus quia molestias libero
          nihil. Molestias culpa, tenetur id officiis debitis voluptatem omnis
          obcaecati adipisci illo magni.
        </p>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="relative w-96">
          <Image
            src={LandingProductImg}
            layout="responsive"
            alt="ecoplease product"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
