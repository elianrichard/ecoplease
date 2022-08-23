import React from "react";
import Link from "next/link";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import LogoTextLight from "../../asset/svgs/logo/LogoTextLight2";

import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <nav
      className="w-screen bg-darkRed flex justify-end lg:justify-between items-center xl:px-20 lg:px-10 px-7 h-16 text-white fixed z-50 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)]"
      style={{
        backgroundImage: `url(${TextureImg.src})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "100%",
      }}
    >
      <div className="absolute top-1/2 left-8 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2">
        <LogoTextLight className="lg:w-52 w-40" />
      </div>
      <div className="hidden lg:flex xl:gap-12 lg:gap-6">
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            Home
          </a>
        </Link>
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            About Us
          </a>
        </Link>
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            Products
          </a>
        </Link>
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            Eco News
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex xl:gap-12 lg:gap-6">
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            Blog
          </a>
        </Link>
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            FAQs
          </a>
        </Link>
        <Link href={"/"}>
          <a className="hover:text-paleGreen transitioon-all duration-200 ease-out">
            Contact Us
          </a>
        </Link>
      </div>
      <IconContext.Provider value={{ className: "w-full h-full text-white" }}>
        <div className="w-10 h-10 lg:hidden block">
          <BiMenu />
        </div>
      </IconContext.Provider>
    </nav>
  );
};

export default Header;
