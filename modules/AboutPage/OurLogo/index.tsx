import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TextureImg from "../../../asset/pictures/paper-texture-3.png";
import OurLogoBgImg from "../../../asset/pictures/about/our-logo-bg.jpg";

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
    <div className="mb-1 flex h-96 w-screen">
      <div
        className="h-full flex-[3] bg-darkRed text-5xl font-bold text-skinCream"
        style={{
          backgroundImage: `url(${TextureImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex h-full w-full gap-20 px-20">
          <div className="flex flex-[3] flex-col items-end justify-center gap-8">
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
            <LogoLight className="w-52 fill-skinCream" />
          </div>
        </div>
      </div>
      <div
        className="relative h-full flex-[2] bg-darkRed"
        style={{
          backgroundImage: `url(${OurLogoBgImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <AnimatePresence>
          <div className="relative flex h-full w-full flex-col items-start justify-center text-white">
            <motion.div
              className="absolute flex h-full w-full flex-col items-start justify-center gap-5 px-20"
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
                  : "Click on one of the text on the left to see the description."}
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurLogo;
