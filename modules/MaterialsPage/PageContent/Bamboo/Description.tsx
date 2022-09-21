import React from "react";
import Image from "next/image";

import BambooImg1 from "../../../../asset/pictures/materials/bamboo-1.webp";
import BambooImg2 from "../../../../asset/pictures/materials/bamboo-2.webp";
import BambooImg3 from "../../../../asset/pictures/materials/bamboo-3.webp";

const Description = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full flex-col items-center gap-20 lg:flex-row">
        <div className="relative flex flex-1 justify-end">
          <div className="absolute -bottom-8 right-20 h-72 w-40 bg-ecoRed xs:h-80 xs:w-52 lg:h-96 lg:w-60">
            <Image
              src={BambooImg1}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <div className="relative z-0 aspect-square h-48 bg-black xs:h-60 lg:h-72">
            <Image
              src={BambooImg1}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex-1 text-ecoRed xl:flex-[2]">
          <div className="w-full xl:w-2/3">
            <p className="mb-2 text-3xl font-bold">
              Why do we choose Bamboo Fiber?
            </p>
            <p className="text-xl">
              Bamboo is seen as the finest material to create Eco-friendly
              products as it is sustainable, has a rapid growth which can avoid
              deforestation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center gap-28 md:mt-20 md:flex-row-reverse md:items-start md:gap-10 lg:gap-20">
        <div className="relative flex flex-1 flex-row-reverse md:justify-end">
          <div className="absolute -top-16 left-32 h-60 w-40 xs:h-72 xs:w-52 lg:h-80 lg:w-60">
            <div className="absolute h-full w-full bg-ecoRed">
              <Image
                src={BambooImg2}
                alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
                layout="fill"
                objectFit="cover"
                objectPosition="left center"
                className="mix-blend-multiply"
              />
            </div>
          </div>
          <div className="relative z-0 h-52 w-60 bg-black xs:h-64 xs:w-72 lg:h-72 lg:w-80">
            <Image
              src={BambooImg2}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-end text-ecoRed lg:flex-[2]">
          <div className="w-full md:text-right lg:w-2/3">
            <p className="text-xl">
              It is 100% home compostable, stronger than steel, antibacterial,
              and antifungal. Our technique to create Bamboo Fiber is the most
              natural way and doesn&apos;t harm the environment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row lg:-mt-20 lg:items-end xl:gap-20">
        <div className="relative flex flex-1 justify-end">
          <div className="absolute -bottom-8 right-10 h-52 w-72 bg-ecoRed lg:right-20 lg:h-60 lg:w-80">
            <Image
              src={BambooImg3}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-multiply"
            />
          </div>
          <div className="relative z-0 h-72 w-52 bg-black lg:h-80 lg:w-60">
            <Image
              src={BambooImg3}
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex-[2] text-ecoRed">
          <div className="w-full xl:w-2/3">
            <p className="text-xl ">
              First we collect the bamboo and grind them into powder then the
              powder is processed into natural bamboo fiber.
              <br />
              <br />
              The process does not create water pollution as it is natural and
              the processing temperature is strictly controlled under 200°C to
              effectively ensure low carbon emission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
