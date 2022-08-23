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
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Product Catalog
              </a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Our Materials
              </a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Become a Partner
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="bg-skinCream inline-block px-3 py-1 font-black text-lg text-black mb-2">
              MARKETPLACE
            </p>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Tokopedia
              </a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Shopee
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-skinCream inline-block px-3 py-1 font-black text-lg text-black mb-2">
              ABOUT
            </p>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Our Journey
              </a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                Blog
              </a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-paleGreen transition-all ease-out duration-200">
                FAQs
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
