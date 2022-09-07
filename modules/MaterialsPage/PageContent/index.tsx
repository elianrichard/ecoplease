import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Bamboo from "./Bamboo";
import Sugarcane from "./Sugarcane";

const PageContent = () => {
  const [selectedContent, setSelectedContent] = useState<number>(0);

  const contentProps = {
    className: "mt-20 flex flex-col gap-28 w-full",
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  };

  return (
    <>
      <div className="my-1 flex w-screen flex-col items-center justify-center gap-10 bg-black py-16 px-10 xs:px-20 xl:px-32">
        <p className="text-center text-4xl font-bold uppercase text-white md:text-5xl">
          PICK YOUR MATERIALS
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-5 text-xl font-bold md:gap-10 md:text-2xl xs:flex-row">
          <button
            className={`h-16 w-full flex-1 rounded-xl border-4 py-2 uppercase transition-all duration-200 ease-out md:h-20 xs:py-0 ${
              selectedContent === 0
                ? "border-darkRed bg-white text-darkRed"
                : "border-transparent bg-darkRed text-white hover:bg-white hover:text-darkRed"
            }`}
            onClick={() => setSelectedContent(0)}
          >
            Bamboo
          </button>
          <button
            className={`h-16 w-full flex-1 rounded-xl border-4 py-2 uppercase transition-all duration-200 ease-out md:h-20 xs:py-0 ${
              selectedContent === 1
                ? "border-darkRed bg-white text-darkRed"
                : "border-transparent bg-darkRed text-white hover:bg-white hover:text-darkRed"
            }`}
            onClick={() => setSelectedContent(1)}
          >
            Sugarcane
          </button>
        </div>
      </div>
      <div className="flex w-screen justify-center bg-skinCream py-20">
        <div className="flex w-4/5 flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!selectedContent ? (
              <Bamboo key={selectedContent} {...contentProps} />
            ) : (
              <Sugarcane key={selectedContent} {...contentProps} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default PageContent;
