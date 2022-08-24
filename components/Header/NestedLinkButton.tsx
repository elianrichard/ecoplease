import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IconContext } from "react-icons";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  text: string | string[][];
  links: string[][];
  setNavbar: Dispatch<SetStateAction<boolean>>;
}

const NestedLinkButton = ({ text, links, setNavbar }: Props) => {
  const router = useRouter();
  const linksUrl = links.map((el) => el[1]);

  return (
    <li className="group relative flex h-full flex-col items-center justify-center">
      <p
        className={`pointer-events-none flex ${
          linksUrl.includes(router.pathname) ? "text-paleGreen" : "text-white"
        }`}
      >
        {text}
        <span>
          <IconContext.Provider value={{ className: "h-full w-6 ml-1" }}>
            <BiChevronDown />
          </IconContext.Provider>
        </span>
      </p>
      <ul className="flex max-h-0 flex-col items-center justify-start gap-2 overflow-hidden bg-ecoRed text-center transition-all duration-200 ease-out group-hover:max-h-20 lg:pointer-events-none lg:absolute lg:top-[100%] lg:-left-3 lg:mt-0 lg:w-40 lg:items-start lg:gap-0 lg:overflow-auto lg:text-left lg:opacity-0 lg:shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.5)] lg:group-hover:pointer-events-auto lg:group-hover:max-h-fit lg:group-hover:opacity-100">
        {links.map((el, i) => {
          return (
            <li className={`${!i && "mt-5"} lg:mt-0 lg:w-full`} key={i}>
              <Link href={el[1]}>
                <a
                  className={`block w-fit bg-ecoRed transition-all duration-200 ease-out hover:text-paleGreen lg:w-full lg:py-3 lg:px-4 lg:hover:bg-darkRed ${
                    router.pathname === el[1] ? "text-paleGreen" : "text-white"
                  }`}
                  onClick={() => setNavbar(false)}
                >
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
