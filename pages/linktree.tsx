import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React from "react";
import LogoPrimaryWhite from "../asset/svgs/logo/LogoPrimaryWhite";

import paperTextureImg from "../asset/pictures/paper-texture.webp";

const Linktree = () => {
  const links = [
    ["Whatsapp", "https://wa.me/6287888199947"],
    ["Tokopedia", "https://tokopedia.link/ecoplease"],
    ["Shopee", "http://shopee.co.id/ecoplease"],
    ["Website", "https://ecoplease.id/"],
    ["About", "https://ecoplease.id/about"],
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
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-10 py-20 px-10">
      <motion.div
        className="absolute -z-10 h-full w-full bg-darkRed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src={paperTextureImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => linksControl.start("show")}
        className="w-40"
      >
        <LogoPrimaryWhite className="fill-white" />
      </motion.div>
      <motion.div className="text-center text-white">
        <p className="mb-3 text-3xl font-bold">Hello eco-warriors!</p>
        <p>Let us help you today, just click on one of the links below :)</p>
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
            className="flex w-full items-center justify-center bg-darkRed/0 text-white transition-all duration-200 ease-out hover:bg-white hover:text-darkRed "
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
