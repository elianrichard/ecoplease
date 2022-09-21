import React from "react";
import Link from "next/link";
import Image from "next/image";

import LogoLightSVG from "../../asset/svgs/logo/LogoLight";
import TextureImg from "../../asset/pictures/paper-texture-3.webp";

const Footer = () => {
  return (
    <footer className="relative flex w-screen justify-center">
      <div className="absolute -z-10 h-full w-full bg-darkRed">
        <Image
          src={TextureImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-10 py-16 px-10 text-center text-white md:flex-row md:gap-0 lg:w-4/5 lg:px-0 xl:w-3/5">
        <div className="flex items-center justify-center">
          <LogoLightSVG className="w-32 fill-white" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 bg-skinCream px-3 py-1 text-lg font-black text-black">
            QUICK LINKS
          </p>
          <Link href={"/products"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Product Catalog
            </a>
          </Link>
          <Link href={"/materials"}>
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
          <Link href={"/about"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Our Journey
            </a>
          </Link>
          <Link href={"/econews"}>
            <a className="transition-all duration-200 ease-out hover:text-paleGreen">
              Blog
            </a>
          </Link>
          <Link href={"/faqs"}>
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
