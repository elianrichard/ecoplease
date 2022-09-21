import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import TextureImg from "../../../asset/pictures/paper-texture-3.webp";
import OurLogoBgImg from "../../../asset/pictures/about/our-logo-bg.webp";

import LogoLight from "../../../asset/svgs/logo/LogoLight";

import LogoComponent from "./LogoComponent";

const OurLogo = () => {
  const [selectedTitle, setSelectedTitle] = useState<number>(NaN);

  const logoTitleDesc = [
    { name: "The World.", desc: "This is description of the world" },
    { name: "Children.", desc: "This is description of the children" },
    { name: "Blood.", desc: "This is description of the blood" },
  ];

  return (
    <div className="mb-1 flex w-screen flex-col lg:h-96 lg:flex-row">
      <div className="relative h-full flex-[3] text-5xl font-bold text-skinCream">
        <div className="absolute -z-10 h-full w-full bg-darkRed">
          <Image
            src={TextureImg}
            alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex h-full w-full flex-col-reverse gap-10 py-16 sm:flex-row sm:gap-16 sm:px-20 sm:py-10 lg:py-0 xl:gap-20">
          <div className="flex flex-[3] flex-col justify-center gap-8 sm:items-end">
            {logoTitleDesc.map((el, i) => (
              <LogoComponent
                title={el.name}
                selected={selectedTitle}
                setSelected={setSelectedTitle}
                index={i}
                key={i}
              />
            ))}
          </div>
          <div className="flex h-full flex-[2] items-center justify-center">
            <LogoLight className="w-32 fill-skinCream xl:w-52" />
          </div>
        </div>
      </div>
      <div className="relative h-full flex-[2]">
        <div className="absolute -z-10 h-full w-full bg-darkRed">
          <Image
            src={OurLogoBgImg}
            alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply"
          />
        </div>
        <AnimatePresence>
          <div className="relative h-64 w-full flex-col  text-white sm:h-80 lg:h-full">
            <motion.div
              className="absolute flex h-full w-full flex-col items-center justify-center gap-5 px-5 text-center sm:items-start sm:px-20 sm:text-left"
              key={
                !Number.isNaN(selectedTitle)
                  ? logoTitleDesc[selectedTitle].name
                  : "Our Logo"
              }
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <p className="text-4xl font-bold">
                {!Number.isNaN(selectedTitle)
                  ? logoTitleDesc[selectedTitle].name
                  : "Our Logo"}
              </p>
              <p className="text-lg">
                {!Number.isNaN(selectedTitle)
                  ? logoTitleDesc[selectedTitle].desc
                  : "Click on one of the text to see the description."}
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurLogo;
