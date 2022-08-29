import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
} from "react";

import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  question: string;
  answer: string;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
  index: number;
}

const FaqCard = ({ question, answer, index, selected, setSelected }: Props) => {
  const answerElement = useRef() as MutableRefObject<HTMLParagraphElement>;

  return (
    <div
      className="flex w-full cursor-pointer flex-col items-center justify-start overflow-hidden rounded-xl bg-skinCream px-10 py-5"
      onClick={() => {
        if (selected !== index) setSelected(index);
        else setSelected(NaN);
      }}
    >
      <div className="flex w-full items-center justify-between gap-3 text-lg lg:text-xl text-ecoRed">
        <p>{question}</p>
        <IconContext.Provider
          value={{
            className: `fill-ecoRed h-[30px] w-[30px] transition-all duration-200 ease-out ${
              selected === index && "-rotate-180"
            }`,
          }}
        >
          <IoIosArrowDown />
        </IconContext.Provider>
      </div>
      <AnimatePresence initial={false}>
        {selected === index && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <p className="pt-5 lg:text-lg text-black" ref={answerElement}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
