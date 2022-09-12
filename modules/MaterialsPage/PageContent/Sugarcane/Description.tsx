import React from "react";

import SugarcaneImg1 from "../../../../asset/pictures/materials/sugarcane-1.webp";
import SugarcaneImg2 from "../../../../asset/pictures/materials/sugarcane-2.jpg";
import SugarcaneImg3 from "../../../../asset/pictures/materials/sugarcane-3.jpg";

const Description = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full flex-col items-center gap-20 lg:flex-row">
        <div className="relative flex flex-1 justify-end">
          <div
            className="absolute -bottom-8 right-20 h-72 w-40 bg-ecoRed xs:h-80 xs:w-52 lg:h-96 lg:w-60"
            style={{
              backgroundImage: `url(${SugarcaneImg1.src})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          />
          <div
            className="z-0 aspect-square h-48 bg-black xs:h-60 lg:h-72 "
            style={{
              backgroundImage: `url(${SugarcaneImg1.src})`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="flex-1 text-ecoRed xl:flex-[2]">
          <div className="w-full xl:w-2/3">
            <p className="mb-2 text-3xl font-bold">
              Why do we choose Sugarcane Bagasse?
            </p>
            <p className="text-xl">
              Sugarcane Bagasse is a plant fiber, more specifically it is the
              fibrous matter that is left over after the production of sugar
              from sugarcane.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center gap-28 md:mt-20 md:flex-row-reverse md:items-start md:gap-10 lg:gap-20">
        <div className="relative flex flex-1 flex-row-reverse md:justify-end">
          <div
            className="absolute -top-16 left-32 h-60 w-40 bg-ecoRed xs:h-72 xs:w-52 lg:h-80 lg:w-60 "
            style={{
              backgroundImage: `url(${SugarcaneImg2.src})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          />
          <div
            className="z-0 h-52 w-60 bg-black xs:h-64 xs:w-72 lg:h-72 lg:w-80 "
            style={{
              backgroundImage: `url(${SugarcaneImg2.src})`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="flex flex-1 justify-end text-ecoRed lg:flex-[2]">
          <div className="w-full md:text-right lg:w-2/3">
            <p className="text-xl">
              So in a word, it is bio-waste. Historically, Bagasse was treated
              as unusable and disposed of - thrown away, burned or left in open
              piles to rot. It was not seen as a useful by-product.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row lg:-mt-20 lg:items-end xl:gap-20">
        <div className="relative flex flex-1 justify-end">
          <div
            className="absolute -bottom-8 right-10 h-52 w-72 bg-ecoRed lg:right-20 lg:h-60 lg:w-80"
            style={{
              backgroundImage: `url(${SugarcaneImg3.src})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          />
          <div
            className="z-0 h-72 w-52 bg-black lg:h-80 lg:w-60 "
            style={{
              backgroundImage: `url(${SugarcaneImg3.src})`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="flex-[2] text-ecoRed">
          <div className="w-full xl:w-2/3">
            <p className="text-xl ">
              But now we have turned it into an amazing product. Bagasse
              products are 100% home compostable and biodegradable, chemical
              free and chlorine free.
              <br />
              <br />
              Because of these qualities, Ecoplease choses sugarcane bagasse to
              be the main material for our take-away food containers, party
              plates and cups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
