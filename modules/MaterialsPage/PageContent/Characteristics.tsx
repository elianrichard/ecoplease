import React from "react";

import NoPlasticIcon from "../../../asset/svgs/icons/Characteristics/Bamboo/SVG/NoPlasticIcon";

const characteristicsPlaceholder = [
  {
    title: "NO PLA",
    desc: "100% Plastic Free",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
  {
    title: "100% Home Compostible",
    desc: "Biodegradable within 90 days after use and  put in natural conditions",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
  {
    title: "Natural Looks, Natural Smell",
    desc: "Made from natural bamboo fiber",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
  {
    title: "Will not Melt in Hot Drinks",
    desc: "Temperature resistance -20 - 100°",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
  {
    title: "Certification",
    desc: "TUV Rheiland OK Compost Home, SGS, FDA, BPO Compostable",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
  {
    title: "Combustible",
    desc: "100% Combustible Chemical Free",
    icon: <NoPlasticIcon width="60" fill="#fff" />,
  },
];

const Characteristics = () => {
  return (
    <div className="w-full">
      <p className="mb-10 w-full text-center text-5xl font-bold uppercase text-ecoRed">
        Characteristics
      </p>
      <div className="grid w-full grid-cols-3 gap-8">
        {characteristicsPlaceholder.map((el, i) => (
          <div
            className="group flex h-52 flex-col justify-between rounded-xl bg-darkRed px-6 py-5 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out hover:bg-white"
            key={i}
          >
            <NoPlasticIcon
              width="60"
              className="fill-skinCream group-hover:fill-darkRed"
            />
            <div className="text-skinCream transition-all duration-200 ease-out group-hover:text-darkRed">
              <p className="text-lg font-bold uppercase">{el.title}</p>
              <p className="text-sm">{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characteristics;
