import React from "react";
import Link from "next/link";

import { IconContext } from "react-icons";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  text: string | string[][];
  links: string[][];
}

const NestedLinkButton = ({ text, links }: Props) => {
  return (
    <li className="group relative flex h-full flex-col items-center justify-center">
      <p className="pointer-events-none flex ">
        {text}
        <span>
          <IconContext.Provider
            value={{ className: "text-white h-full w-6 ml-1" }}
          >
            <BiChevronDown />
          </IconContext.Provider>
        </span>
      </p>
      <ul className="flex max-h-0 flex-col items-center justify-start gap-2 overflow-hidden bg-ecoRed text-center transition-all duration-200 ease-out group-hover:max-h-20 lg:pointer-events-none lg:absolute lg:top-[100%] lg:-left-3 lg:mt-0 lg:w-40 lg:items-start lg:gap-0 lg:overflow-auto lg:text-left lg:opacity-0 lg:shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.5)] lg:group-hover:pointer-events-auto lg:group-hover:max-h-fit lg:group-hover:opacity-100">
        {links.map((el, i) => {
          return (
            <li className={`${!i && "mt-5"} lg:mt-0 lg:w-full`} key={i}>
              <Link href={el[1]}>
                <a className="block w-fit bg-ecoRed transition-all duration-200 ease-out hover:text-paleGreen lg:w-full lg:py-3 lg:px-4 lg:hover:bg-darkRed">
                  {el[0]}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default NestedLinkButton;
