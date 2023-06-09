import React from "react";

import NoPlasticIcon from "../../../../asset/svgs/icons/Characteristics/NoPlasticIcon";
import TrashIcon from "../../../../asset/svgs/icons/Characteristics/TrashIcon";
import BambooIcon from "../../../../asset/svgs/icons/Characteristics/BambooIcon";
import TemperatureIcon from "../../../../asset/svgs/icons/Characteristics/TemperatureIcon";
import CertifiedIcon from "../../../../asset/svgs/icons/Characteristics/CertifiedIcon";
import FireIcon from "../../../../asset/svgs/icons/Characteristics/FireIcon";

const svgProps = {
  className:
    "w-14 h-14 fill-skinCream group-hover:fill-darkRed xs:w-10 sm:w-14 sm:h-14 xs:h-10",
};

const characteristicsPlaceholder = [
  {
    title: "NO PLA",
    desc: "100% Plastic Free",
    icon: <NoPlasticIcon {...svgProps} />,
  },
  {
    title: "100% Home Compostible",
    desc: "Biodegradable within 90 days after use and  put in natural conditions",
    icon: <TrashIcon {...svgProps} />,
  },
  {
    title: "Natural Looks, Natural Smell",
    desc: "Made from natural bamboo fiber",
    icon: <BambooIcon {...svgProps} />,
  },
  {
    title: "Will not Melt in Hot Drinks",
    desc: "Temperature resistance -20 - 100°",
    icon: <TemperatureIcon {...svgProps} />,
  },
  {
    title: "Certification",
    desc: "TUV Rheiland OK Compost Home, SGS, FDA, BPO Compostable",
    icon: <CertifiedIcon {...svgProps} />,
  },
  {
    title: "Non-Combustible",
    desc: "100% Combustible Chemical Free",
    icon: <FireIcon {...svgProps} />,
  },
];

const Characteristics = () => {
  return (
    <div className="w-full">
      <p className="mb-10 w-full text-center text-2xl font-bold uppercase text-ecoRed xs:text-3xl sm:text-4xl md:text-5xl">
        Characteristics
      </p>
      <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {characteristicsPlaceholder.map((el, i) => (
          <div
            className="group flex flex-col justify-start gap-5 rounded-xl bg-darkRed px-6 py-5 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out hover:bg-white xs:h-60 xs:justify-between xs:gap-0"
            key={i}
          >
            {el.icon}
            <div className="text-skinCream transition-all duration-200 ease-out group-hover:text-darkRed">
              <p className="text-lg font-bold uppercase xs:text-base sm:text-lg">
                {el.title}
              </p>
              <p className="text-sm xs:text-xs sm:text-sm">{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characteristics;
