import {
  motion,
  MotionProps,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import React from "react";
import LogoLight from "../asset/svgs/logo/LogoLight";

const Linktree = () => {
  const links = [
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
  ];

  const containerVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const childrenVar = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  const linksControl = useAnimationControls();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-darkRed py-20 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => linksControl.start("show")}
        className="w-32"
      >
        <LogoLight className="fill-white" />
      </motion.div>
      <motion.ul
        variants={containerVar}
        initial="hidden"
        animate={linksControl}
        className="flex w-full flex-col items-center justify-center gap-5 sm:w-[30rem]"
      >
        {links.map((el, i) => (
          <motion.li
            variants={childrenVar}
            className="flex w-full items-center justify-center bg-darkRed text-white transition-all duration-200 ease-out hover:bg-white hover:text-darkRed "
            key={i}
          >
            <a
              href={el[1]}
              target="_blank"
              rel="noreferrer"
              className="block w-full border-[1px] border-white py-3 text-center"
            >
              {el[0]}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Linktree;
