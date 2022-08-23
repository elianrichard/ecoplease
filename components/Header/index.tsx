import React from "react";
import Link from "next/link";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import LogoTextLight from "../../asset/svgs/icons/LogoTextLight2";

const Header = () => {
  return (
    <nav
      className="w-screen bg-darkRed flex justify-between items-center px-20 h-16 text-white fixed z-50 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.8)]"
      style={{
        backgroundImage: `url(${TextureImg.src})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "100%",
      }}
    >
      <div className="flex gap-12">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Products</Link>
        <Link href={"/"}>Eco News</Link>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoTextLight width="13rem" />
      </div>
      <div className="flex gap-12">
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>FAQs</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Header;
