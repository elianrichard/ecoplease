import React, { Dispatch, SetStateAction } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  title: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  index: number;
}

const LogoComponent = ({ title, selected, setSelected, index }: Props) => {
  return (
    <motion.p
      whileHover={{ scale: 1.1 }}
      className={classNames(
        "before:title-outline-skinCream relative z-0 w-full origin-bottom-right cursor-pointer text-center sm:text-right text-4xl font-bold text-skinCream before:absolute before:top-1 before:-z-10 before:translate-x-1 before:transition-opacity before:duration-200 before:ease-out hover:before:opacity-100 xl:text-5xl",
        {
          "before:content-['The_World.']": title === "The World.",
          "before:content-['Children.']": title === "Children.",
          "before:content-['Blood']": title === "Blood.",
        },
        {
          "before:opacity-0": index !== selected,
        }
      )}
      onClick={() => {
        if (selected !== index) setSelected(index);
        else setSelected(NaN);
      }}
    >
      {title}
    </motion.p>
  );
};

export default LogoComponent;
