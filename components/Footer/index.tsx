import React from "react";
import Link from "next/link";

import LogoLightSVG from "../../asset/svgs/logo/LogoLight";
import TextureImg from "../../asset/pictures/paper-texture-3.png";

const Footer = () => {
  return (
    <footer
      className="flex w-screen justify-center bg-darkRed py-16"
      style={{
        backgroundImage: `url(${TextureImg.src})`,
        backgroundSize: "100%",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex w-full flex-col justify-between gap-10 px-10 text-center text-white md:flex-row md:gap-0 lg:w-4/5 lg:px-0 xl:w-3/5">
        <div className="flex items-center justify-center">
          <LogoLightSVG className="w-32" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 bg-skinCream px-3 py-1 text-lg font-black text-black">
            QUICK LINKS
          </p>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Product Catalog
            </a>
          </Link>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Our Materials
            </a>
          </Link>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Become a Partner
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="mb-2 bg-skinCream px-3 py-1 text-lg font-black text-black">
            MARKETPLACE
          </p>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Tokopedia
            </a>
          </Link>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Shopee
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 inline-block bg-skinCream px-3 py-1 text-lg font-black text-black">
            ABOUT
          </p>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Our Journey
            </a>
          </Link>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Blog
            </a>
          </Link>
          <Link href={"/"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              FAQs
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
