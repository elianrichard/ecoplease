import React from "react";
import Image from "next/image";

import Bpi from "../../asset/pictures/certifications/bpi.png";
import Compostable from "../../asset/pictures/certifications/compostable.png";
import Fda from "../../asset/pictures/certifications/fda.png";
import Sgs from "../../asset/pictures/certifications/sgs.png";
import TuvHome from "../../asset/pictures/certifications/tuv-home.png";
import TuvIndustrial from "../../asset/pictures/certifications/tuv-industrial.png";

const Certification = () => {
  const imageArray = [Bpi, Compostable, Fda, Sgs, TuvHome, TuvIndustrial];
  return (
    <div className="flex h-fit w-full flex-col items-center gap-14">
      <p className="text-outline relative z-0 w-full text-center text-4xl font-black text-darkRed before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['CERTIFICATION'] xs:text-5xl">
        CERTIFICATION
      </p>
      <div className="flex h-full flex-wrap justify-center gap-10">
        {imageArray.map((el, i) => {
          return (
            <div className="relative h-20 w-16 xs:w-32" key={i}>
              <Image
                src={el}
                layout="fill"
                objectFit="contain"
                alt={el.src.replace(/^.*[\\\/]/, "")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
