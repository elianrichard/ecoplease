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
    <div className="flex flex-col items-center w-4/5 gap-14">
      <p className="text-darkRed font-black text-5xl text-center w-full relative before:content-['CERTIFICATION'] before:absolute before:top-1 before:translate-x-1 text-outline z-0 before:-z-10">
        CERTIFICATION
      </p>
      <div className="flex gap-10 h-20">
        {imageArray.map((el, i) => {
          return (
            <div className="w-32 h-full relative" key={i}>
              <Image
                src={el}
                layout="fill"
                objectFit="contain"
                alt={el.src.replace(/^.*[\\\/]/, '')}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
