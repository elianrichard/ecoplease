import React, { Dispatch, SetStateAction } from "react";

import classNames from "classnames";
("classnames");

interface Props {
  title: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  index: number;
}

const LogoComponent = ({ title, selected, setSelected, index }: Props) => {
  return (
    <p
      className={classNames(
        "before:title-outline-skinCream relative z-0 w-full cursor-pointer text-right font-black text-skinCream before:absolute before:top-1 before:-z-10 before:translate-x-1 before:transition-opacity before:duration-200 before:ease-out xs:text-5xl",
        {
          ["before:content-['The_World.']"]:
            selected === index && title === "The World.",
          ["before:content-['Children.']"]:
            selected === index && title === "Children.",
          ["before:content-['Blood']"]:
            selected === index && title === "Blood.",
        }
      )}
      onClick={() => {
        if (selected !== index) setSelected(index);
        else setSelected(NaN);
      }}
    >
      {title}
    </p>
  );
};

export default LogoComponent;
