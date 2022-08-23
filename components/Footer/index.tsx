import React from "react";
import Link from "next/link";

import LogoLightSVG from "../../asset/svgs/logo/LogoLight";
import TextureImg from "../../asset/pictures/paper-texture-3.png";

const Footer = () => {
  return (
    <footer
      className="w-screen bg-darkRed py-16 flex justify-center"
      style={{
        backgroundImage: `url(${TextureImg.src})`,
        backgroundSize: "100%",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex justify-between items-center w-3/5 xl:w-1/2 text-white gap-32">
        <div className="flex-1 flex justify-center items-center">
          <LogoLightSVG className="w-full max-w-[13rem] min-w-[5rem]" />
        </div>
        <div className="flex flex-[4] gap-10 justify-between">
          <div className="flex flex-col gap-2">
            <span className="bg-skinCream max-w-content px-3 py-1 font-black text-lg text-black mb-2">
              QUICK LINKS
            </span>
            <Link href={"/"}>Product Catalog</Link>
            <Link href={"/"}>Our Materials</Link>
            <Link href={"/"}>Become a Partner</Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="bg-skinCream inline-block px-3 py-1 font-black text-lg text-black mb-2">
              MARKETPLACE
            </p>
            <Link href={"/"}>Tokopedia</Link>
            <Link href={"/"}>Shopee</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-skinCream inline-block px-3 py-1 font-black text-lg text-black mb-2">
              ABOUT
            </p>
            <Link href={"/"}>Our Journey</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
