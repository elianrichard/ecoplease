import React from "react";
import { motion } from "framer-motion";

const LoadingIcon = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const dotsVariants = {
    intial: {
      scale: 1,
    },
    animate: {
      scale: 1.5,
    },
  };

  const dotsTransition = {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="flex h-full w-full items-center justify-center gap-5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="aspect-square h-4 rounded-full bg-white"
        variants={dotsVariants}
        transition={dotsTransition}
      />
      <motion.div
        className="aspect-square h-4 rounded-full bg-white"
        variants={dotsVariants}
        transition={dotsTransition}
      />
      <motion.div
        className="aspect-square h-4 rounded-full bg-white"
        variants={dotsVariants}
        transition={dotsTransition}
      />
    </motion.div>
  );
};

export default LoadingIcon;
