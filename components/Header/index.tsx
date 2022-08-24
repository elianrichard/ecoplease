import React, { useState } from "react";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import LogoTextLight from "../../asset/svgs/logo/LogoTextLight2";

import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import LinkButton from "./LinkButton";
import NestedLinkButton from "./NestedLinkButton";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false);
  const leftMenu = [
    ["Home", "/"],
    [
      "About",
      [
        ["Our Story", "/about"],
        ["Our Materials", "/materials"],
      ],
    ],
    ["Products", "/products"],
  ];
  const rightMenu = [
    ["Eco News", "/eco-news"],
    ["FAQs", "/faqs"],
  ];
  return (
    <nav
      className="fixed z-50 h-16 w-screen bg-darkRed px-7 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)] lg:px-10 xl:px-20"
      style={{
        backgroundImage: `url(${TextureImg.src})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "100%",
      }}
    >
      <div className="absolute top-1/2 left-8 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <LogoTextLight className="w-40 lg:w-52" />
      </div>
      <div className="absolute right-8 flex h-full w-10 items-center lg:hidden">
        <IconContext.Provider
          value={{ className: "w-full h-full text-white cursor-pointer" }}
        >
          <BiMenu onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        </IconContext.Provider>
      </div>
      <div
        className={`absolute top-[100%] left-0 flex w-screen flex-col items-center justify-between gap-10 bg-ecoRed py-10 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.5)] transition-opacity duration-200 ease-out lg:pointer-events-auto lg:static lg:h-full lg:w-full lg:flex-row lg:bg-transparent lg:py-0 ${
          isNavbarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } lg:opacity-100`}
      >
        <ul className="flex h-full w-full flex-col gap-10 lg:flex-row lg:gap-6 lg:py-0 xl:gap-12">
          {leftMenu.map((el, i) => {
            if (typeof el[1] === "string")
              return (
                <LinkButton
                  text={el[0]}
                  link={el[1]}
                  setNavbar={setIsNavbarOpen}
                  key={i}
                />
              );
            else
              return (
                <NestedLinkButton
                  text={el[0]}
                  links={el[1]}
                  setNavbar={setIsNavbarOpen}
                  key={i}
                />
              );
          })}
        </ul>
        <ul className="flex h-full w-full flex-col justify-end gap-10 lg:flex-row lg:gap-6 lg:py-0 xl:gap-12">
          {rightMenu.map((el, i) => {
            if (typeof el[1] === "string")
              return (
                <LinkButton
                  text={el[0]}
                  link={el[1]}
                  setNavbar={setIsNavbarOpen}
                  key={i}
                />
              );
            else
              return (
                <NestedLinkButton
                  text={el[0]}
                  links={el[1]}
                  setNavbar={setIsNavbarOpen}
                  key={i}
                />
              );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
