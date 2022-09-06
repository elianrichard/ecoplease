import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Bamboo from "./Bamboo";
import Sugarcane from "./Sugarcane";

const PageContent = () => {
  const [selectedContent, setSelectedContent] = useState<number>(0);

  const contentProps = {
    className: "mt-20 flex flex-col gap-28",
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
    transition: {
      ease: "easeInOut",
      duration: 0.5
    },
  };

  return (
    <>
      <div className="my-1 flex w-screen flex-col items-center justify-center gap-10 bg-black py-16">
        <p className="text-5xl font-bold uppercase text-white">
          PICK YOUR MATERIALS
        </p>
        <div className="flex w-4/5 items-center gap-10 text-2xl font-bold">
          <button
            className={`h-20 flex-1 rounded-xl border-4 uppercase transition-all duration-200 ease-out ${
              selectedContent === 0
                ? "border-darkRed bg-white text-darkRed"
                : "border-transparent bg-darkRed text-white hover:bg-white hover:text-darkRed"
            }`}
            onClick={() => setSelectedContent(0)}
          >
            Bamboo
          </button>
          <button
            className={`h-20 flex-1  rounded-xl border-4 uppercase transition-all duration-200 ease-out ${
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
            {selectedContent ? (
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
