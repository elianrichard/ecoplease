import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
} from "react";

import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

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
      <div className="flex w-full justify-between text-xl text-ecoRed">
        <p>{question}</p>
        <IconContext.Provider
          value={{
            className: `fill-ecoRed h-full w-7 transition-all duration-200 ease-out ${
              selected === index && "-rotate-180"
            }`,
          }}
        >
          <IoIosArrowDown />
        </IconContext.Provider>
      </div>
      <div
        className={`${
          selected === index
            // ? `max-h-[${answerElement.current.scrollHeight}px]`
            ? `max-h-32`
            : "max-h-0"
        } transition-all duration-200 ease-out`}
      >
        <p
          className="pt-5 text-lg text-black"
          ref={answerElement}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
