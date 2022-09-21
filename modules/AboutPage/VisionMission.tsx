import React from "react";
import Image from "next/image";

import TextureImg from "../../asset/pictures/paper-texture-3.webp";
import OurMissionBgImg from "../../asset/pictures/about/our-mission-bg.webp";
import OurVisionBgImg from "../../asset/pictures/about/our-vision-bg.webp";

const VisionMission = () => {
  return (
    <div className="mb-1 flex w-screen flex-col">
      <div className="mb-1 flex w-full flex-col sm:mb-0 sm:h-80 sm:flex-row">
        <div className="relative flex flex-[2] items-center">
          <div className="absolute -z-10 h-full w-full bg-skinCream">
            <Image
              src={TextureImg}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <p className="w-full py-10 text-center text-5xl font-bold uppercase leading-tight text-darkRed sm:py-0 lg:text-6xl">
            Our
            <br />
            Vision
          </p>
        </div>
        <div className="relative flex flex-[3] items-center py-20 sm:py-0">
          <div className="absolute -z-10 h-full w-full bg-darkRed">
            <Image
              src={OurVisionBgImg}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <p className="w-full px-16 text-lg text-white lg:px-20 lg:text-xl">
            Creating a world that embraces{" "}
            <span className="bg-white px-2 font-bold text-darkRed">
              eco-decisions
            </span>{" "}
            (a generation that chooses eco-friendly products whenever the option
            is available).
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col sm:h-80 sm:flex-row-reverse ">
        <div className="relative flex flex-[2] items-center">
          <div className="absolute -z-10 h-full w-full bg-skinCream">
            <Image
              src={TextureImg}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <p className="w-full py-10 text-center text-5xl font-bold uppercase leading-tight text-darkRed sm:py-0 lg:text-6xl">
            Our
            <br />
            Mission
          </p>
        </div>
        <div className="relative flex flex-[3] items-center py-20 sm:py-0">
          <div className="absolute -z-10 h-full w-full bg-darkRed">
            <Image
              src={OurMissionBgImg}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <p className="w-full px-16 text-lg text-white sm:text-right lg:px-20 lg:text-xl">
            To provide a range of 100% Home Compostable products as an{" "}
            <span className="bg-white px-2 font-bold text-darkRed">
              alternatives
            </span>{" "}
            to non-eco friendly products
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VisionMission;
