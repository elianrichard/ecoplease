import React, { useEffect, useState } from "react";

import { IconContext } from "react-icons";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";

import BambooIcon from "../../../../asset/svgs/icons/Characteristics/BambooIcon";
import CutleriesIcon from "../../../../asset/svgs/icons/Characteristics/CutleriesIcon";
import DegradationIcon from "../../../../asset/svgs/icons/Characteristics/DegradationIcon";
import MoldingIcon from "../../../../asset/svgs/icons/Characteristics/MoldingIcon";
import PowderIcon from "../../../../asset/svgs/icons/Characteristics/PowderIcon";
import RegrowthIcon from "../../../../asset/svgs/icons/Characteristics/RegrowthIcon";
import SunIcon from "../../../../asset/svgs/icons/Characteristics/SunIcon";
import TrashIcon from "../../../../asset/svgs/icons/Characteristics/TrashIcon";

const lifeCyclePlaceholder = [
  {
    icon: <BambooIcon className="w-full" />,
    desc: "Bamboo",
  },
  {
    icon: <SunIcon className="w-full" />,
    desc: "Dry Processing",
  },
  {
    icon: <PowderIcon className="w-full" />,
    desc: "Powder",
  },
  {
    icon: <MoldingIcon className="w-full" />,
    desc: "Molding",
  },
  {
    icon: <CutleriesIcon className="w-full" />,
    desc: "Ecoplease Product",
  },
  {
    icon: <TrashIcon className="w-full" />,
    desc: "Disposal",
  },
  {
    icon: <DegradationIcon className="w-full" />,
    desc: "Biodegradation",
  },
  {
    icon: <RegrowthIcon className="w-full" />,
    desc: "Regrowth",
  },
];

const topPlacement = [
  "top-[calc(0%-40px)]",
  "top-[calc(14.644%-40px)]",
  "top-[calc(50%-40px)]",
  "top-[calc(85.355%-40px)]",
  "top-[calc(100%-40px)]",
  "top-[calc(85.355%-40px)]",
  "top-[calc(50%-40px)]",
  "top-[calc(14.644%-40px)]",
];
const leftPlacement = [
  "left-[calc(50%-40px)]",
  "left-[calc(85.355%-40px)]",
  "left-[calc(100%-40px)]",
  "left-[calc(85.355%-40px)]",
  "left-[calc(50%-40px)]",
  "left-[calc(14.644%-40px)]",
  "left-[calc(0%-40px)]",
  "left-[calc(14.644%-40px)]",
];

const topPlacementArrow = [
  "top-[calc(0%-20px)]",
  "top-[calc(14.644%-20px)]",
  "top-[calc(50%-20px)]",
  "top-[calc(85.355%-20px)]",
  "top-[calc(100%-20px)]",
  "top-[calc(85.355%-20px)]",
  "top-[calc(50%-20px)]",
  "top-[calc(14.644%-20px)]",
];
const leftPlacementArrow = [
  "left-[calc(50%-20px)]",
  "left-[calc(85.355%-20px)]",
  "left-[calc(100%-20px)]",
  "left-[calc(85.355%-20px)]",
  "left-[calc(50%-20px)]",
  "left-[calc(14.644%-20px)]",
  "left-[calc(0%-20px)]",
  "left-[calc(14.644%-20px)]",
];
const LifeCycle = () => {
  const navArrowClass =
    "hidden sm:block transition-200 group h-fit w-fit cursor-pointer rounded-full bg-black p-2 lg:p-3 transition-all duration-200 ease-out hover:bg-white";

  const [currentCycle, setCurrentCycle] = useState<number>(0);
  const [cycleContent, setCycleContent] = useState(lifeCyclePlaceholder[0]);

  useEffect(() => {
    setCycleContent(lifeCyclePlaceholder[currentCycle]);
  }, [currentCycle]);

  return (
    <div className="mb-14 w-full">
      <p className="mb-24 w-full text-center text-5xl font-bold uppercase text-ecoRed">
        Life Cycle
      </p>
      <div className="flex flex-col items-center justify-center gap-20 sm:flex-row sm:gap-14 md:gap-20 lg:gap-32">
        <div
          className={navArrowClass}
          onClick={() => {
            if (currentCycle !== 0) setCurrentCycle(currentCycle - 1);
            else setCurrentCycle(lifeCyclePlaceholder.length - 1);
          }}
        >
          <IconContext.Provider
            value={{
              className:
                "text-4xl lg:text-5xl text-white -translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
            }}
          >
            <IoIosArrowBack />
          </IconContext.Provider>
        </div>
        <div className="relative flex aspect-square w-[90%] flex-col items-center justify-center rounded-full sm:w-[400px] xl:w-[500px] ">
          <div className="flex h-fit w-32 flex-col items-center justify-center sm:w-52">
            <div className="mb-4 w-16 sm:w-20 md:mb-6 md:w-24 lg:w-32">
              {cycleContent.icon}
            </div>
            <p className="text-center text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
              {cycleContent.desc}
            </p>
          </div>
          {/* number circle */}
          <div className="absolute h-full w-full">
            {lifeCyclePlaceholder.map((_el, i) => (
              <div
                className={`absolute ${topPlacement[i]} ${
                  leftPlacement[i]
                } z-10 flex aspect-square h-[80px] w-[80px] items-center justify-center rounded-full text-2xl font-bold before:absolute before:top-1/2 before:left-1/2 before:aspect-square before:h-[50px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full md:before:h-[70px] xl:text-4xl xl:before:h-[80px] ${
                  i === currentCycle
                    ? "text-ecoRed before:bg-white before:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
                    : "text-white before:bg-ecoRed"
                } cursor-pointer p-5 transition-all duration-200 ease-out`}
                key={i}
                onClick={() => setCurrentCycle(i)}
              >
                <p className="pointer-events-none z-10">{i + 1}</p>
              </div>
            ))}
          </div>

          {/* arrow icons */}
          <div className="absolute h-full w-full origin-center rotate-[22.5deg]">
            <IconContext.Provider
              value={{
                className:
                  "transition-all duration-200 ease-out md:w-[40px] w-[30px] h-[30px] md:h-[40px]",
              }}
            >
              {lifeCyclePlaceholder.map((_el, i) => (
                <div
                  key={i}
                  className={`absolute ${topPlacementArrow[i]} ${leftPlacementArrow[i]}`}
                  style={{ transform: `rotate(${i * 45}deg)` }}
                >
                  <IoMdArrowDropright
                    className={`${
                      i === currentCycle ? "text-ecoRed" : "text-black"
                    }`}
                    width="40"
                    height="40"
                  />
                </div>
              ))}
            </IconContext.Provider>
          </div>
        </div>
        <div
          className={navArrowClass}
          onClick={() => {
            if (currentCycle !== lifeCyclePlaceholder.length - 1)
              setCurrentCycle(currentCycle + 1);
            else setCurrentCycle(0);
          }}
        >
          <IconContext.Provider
            value={{
              className:
                "text-4xl lg:text-5xl text-white translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
            }}
          >
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="flex gap-10 sm:hidden">
          <div
            className="transition-200 group h-fit w-fit cursor-pointer rounded-full bg-black p-2 transition-all duration-200 ease-out hover:bg-white lg:p-3"
            onClick={() => {
              if (currentCycle !== 0) setCurrentCycle(currentCycle - 1);
              else setCurrentCycle(lifeCyclePlaceholder.length - 1);
            }}
          >
            <IconContext.Provider
              value={{
                className:
                  "text-4xl lg:text-5xl text-white -translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
              }}
            >
              <IoIosArrowBack />
            </IconContext.Provider>
          </div>
          <div
            className="transition-200 group h-fit w-fit cursor-pointer rounded-full bg-black p-2 transition-all duration-200 ease-out hover:bg-white lg:p-3"
            onClick={() => {
              if (currentCycle !== lifeCyclePlaceholder.length - 1)
                setCurrentCycle(currentCycle + 1);
              else setCurrentCycle(0);
            }}
          >
            <IconContext.Provider
              value={{
                className:
                  "text-4xl lg:text-5xl text-white translate-x-1 group-hover:text-black transition-all duration-200 ease-out",
              }}
            >
              <IoIosArrowForward />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeCycle;
