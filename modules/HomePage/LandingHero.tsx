import React from "react";
import Image from "next/image";

import productLandingImg from "../../asset/pictures/home/hero-product.webp";
import paperTextureImg from "../../asset/pictures/paper-texture.webp";
import heroLandingImg from "../../asset/pictures/home/landing-hero.webp";

// import RippedSVG from "../../asset/svgs/ripped/RippedLanding";
import RippedLandingSVG from "../../asset/svgs/ripped/RippedLandingHome";
import { motion, useAnimationControls } from "framer-motion";
import trackEvents from "../_common/hooks/trackEvents";

const LandingHero = () => {
  const containerVar = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.2,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const childrenVar = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  const productImageDivControls = useAnimationControls();
  const productImageControls = useAnimationControls();

  return (
    <div
      className={`relative mb-1 flex w-screen justify-center overflow-hidden lg:h-[calc(100vh-64px)]`}
    >
      <div className="absolute -z-10 h-full w-full bg-darkRed">
        <Image
          src={paperTextureImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
          priority
        />
      </div>
      <RippedLandingSVG />
      <div
        className="absolute top-0 left-0 w-4/5 lg:h-screen"
        style={{ clipPath: `url(#landingHomeMask)` }}
      >
        <Image
          src={heroLandingImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          objectPosition="-120px 100%"
          className="scale-125 brightness-[65%] grayscale-[20%] sepia-[100%]"
          priority
        />
        {/* <RippedSVG className="z-20 hidden h-full w-full drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)] lg:block" /> */}
      </div>
      <div className="z-0 flex w-full flex-col items-center justify-center gap-10 py-32 lg:w-4/5 lg:flex-row lg:py-0">
        <motion.div
          variants={containerVar}
          initial="hidden"
          animate="show"
          onAnimationComplete={async () => {
            await productImageDivControls.start({ opacity: 1, y: 0 });
            await productImageControls.start({ y: 50 });
          }}
          className="flex w-full flex-col items-center justify-center lg:items-start"
        >
          <h1 className="mb-10 text-center text-4xl font-bold leading-snug text-white sm:text-5xl sm:leading-tight lg:text-left lg:text-6xl lg:leading-snug">
            100% HOME
            <br />
            <span className="bg-white px-5 text-darkRed">COMPOSTABLE</span>
            <br />
            PACKAGING
          </h1>
          <motion.a
            variants={childrenVar}
            href="#"
            className="clip-path-triangle relative mb-5 bg-skinCream py-2 px-10 text-center text-xl font-bold text-darkRed transition-all duration-200 ease-out hover:px-14 lg:bg-ecoRed lg:text-3xl lg:text-skinCream lg:hover:pl-16 lg:hover:text-white"
            onClick={() => trackEvents("catalog_click")}
          >
            OUR CATALOG
          </motion.a>
          <motion.a
            variants={childrenVar}
            href="#"
            className="clip-path-triangle relative mb-5 bg-skinCream py-2 px-10 text-center text-xl font-bold text-darkRed transition-all duration-200 ease-out hover:px-14 lg:bg-ecoRed lg:text-3xl lg:text-skinCream lg:hover:pl-16 lg:hover:text-white"
            onClick={() => trackEvents("costumize_click")}
          >
            COSTUMIZE PRODUCT
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={productImageDivControls}
          className="relative flex h-96 w-full items-center justify-center lg:h-4/5"
        >
          <motion.div
            initial={{ y: 10 }}
            transition={{
              repeatType: "mirror",
              repeat: Infinity,
              duration: 2,
            }}
            animate={productImageControls}
            className="relative flex h-full w-full items-center justify-center"
          >
            <Image
              src={productLandingImg}
              layout="fill"
              objectFit="contain"
              alt="ECOPLEASE product"
              style={{ filter: "brightness(90%)" }}
              className="lg:object-right-[10px] object-center"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.a
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        href="#"
        className="absolute top-0 right-0 z-20 flex w-full items-center justify-center bg-black py-5 pl-5 pr-5 text-center text-xl font-bold text-skinCream shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)] lg:top-10 lg:w-auto lg:justify-start lg:rounded-l-lg lg:py-1 lg:pr-20"
      >
        GET YOUR FREE SAMPLE NOW!
      </motion.a>
    </div>
  );
};

export default LandingHero;
