import React, { useEffect, useState } from "react";

import { IconContext } from "react-icons";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";

import NoPlasticIcon from "../../../asset/svgs/icons/Characteristics/Bamboo/SVG/NoPlasticIcon";

const lifeCyclePlaceholder = [
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 1",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 2",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 3",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 4",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 5",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 6",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 7",
  },
  {
    icon: <NoPlasticIcon className="mb-6 w-32" />,
    desc: "Dry Processing 8",
  },
];

const LifeCycle = () => {
  const [currentCycle, setCurrentCycle] = useState<number>(0);
  const [cycleContent, setCycleContent] = useState(lifeCyclePlaceholder[0]);

  useEffect(() => {
    setCycleContent(lifeCyclePlaceholder[currentCycle]);
  }, [currentCycle]);

  return (
    <div className="w-full mb-14">
      <p className="mb-24 w-full text-center text-5xl font-bold uppercase text-ecoRed">
        Life Cycle
      </p>
      <div className="flex items-center justify-center gap-32">
        <div
          className="transition-200 group h-fit w-fit cursor-pointer rounded-full bg-black p-3 transition-all duration-200 ease-out hover:bg-white"
          onClick={() => {
            if (currentCycle !== 0) setCurrentCycle(currentCycle - 1);
            else setCurrentCycle(lifeCyclePlaceholder.length - 1);
          }}
        >
          <IconContext.Provider
            value={{
              className:
                "text-5xl text-white -translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
            }}
          >
            <IoIosArrowBack />
          </IconContext.Provider>
        </div>
        <div className="relative flex aspect-square w-[500px] flex-col items-center justify-center rounded-full ">
          <div className="flex h-fit w-52 flex-col items-center justify-center">
            {cycleContent.icon}
            <p className="text-center text-4xl font-bold uppercase">
              {cycleContent.desc}
            </p>
          </div>
          <div className="absolute h-full w-full">
            {lifeCyclePlaceholder.map((_el, i) => (
              <div
                className={`absolute top-[calc(50%-40px)] left-[calc(50%-40px)] flex aspect-square w-[80px] items-center justify-center rounded-full text-4xl font-bold ${
                  i === currentCycle
                    ? "bg-white text-ecoRed shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
                    : "bg-ecoRed text-white"
                } p-5 transition-all duration-200 ease-out`}
                key={i}
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-250px) ${
                    i === currentCycle ? "scale(1.2)" : ""
                  }`,
                }}
              >
                <p
                  style={{
                    transform: `rotate(-${i * 45}deg)`,
                  }}
                >
                  {i + 1}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute h-full w-full origin-center rotate-[22.5deg]">
            <IconContext.Provider
              value={{
                className: "w-full h-full transition-all duration-200 ease-out",
              }}
            >
              {lifeCyclePlaceholder.map((_el, i) => (
                <div
                  key={i}
                  className="absolute top-[calc(50%-20px)] left-[calc(50%-20px)] aspect-square w-[40px]"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-250px)`,
                  }}
                >
                  <IoMdArrowDropright
                    className={`${
                      i === currentCycle ? "text-ecoRed" : "text-black"
                    }`}
                  />
                </div>
              ))}
            </IconContext.Provider>
          </div>
        </div>
        <div
          className="transition-200 group h-fit w-fit cursor-pointer rounded-full bg-black p-3 transition-all duration-200 ease-out hover:bg-white"
          onClick={() => {
            if (currentCycle !== lifeCyclePlaceholder.length - 1)
              setCurrentCycle(currentCycle + 1);
            else setCurrentCycle(0);
          }}
        >
          <IconContext.Provider
            value={{
              className:
                "text-5xl text-white translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
            }}
          >
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default LifeCycle;
