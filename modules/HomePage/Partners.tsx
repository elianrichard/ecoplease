import React from "react";
import Image from "next/image";

import BottegaLogo from "../../asset/pictures/home/partners/Bottega.webp";
import CangguLogo from "../../asset/pictures/home/partners/Canggu-Bakehouse.webp";
import GuttenLogo from "../../asset/pictures/home/partners/Gutten-Morgen.webp";
import LimaLogo from "../../asset/pictures/home/partners/Lima.webp";
import SkipJackLogo from "../../asset/pictures/home/partners/Skipjack.webp";
import SoiLogo from "../../asset/pictures/home/partners/Soi.webp";
import LucyLogo from "../../asset/pictures/home/partners/Lucy.webp";
import ScowpLogo from "../../asset/pictures/home/partners/Hello-Scowp.webp";
import ThreeLogo from "../../asset/pictures/home/partners/Three-Folks.webp";
import AnthologyLogo from "../../asset/pictures/home/partners/Anthology.webp";
import HauseLogo from "../../asset/pictures/home/partners/Hause.webp";
import WilliamsLogo from "../../asset/pictures/home/partners/Williams.webp";

import trackEvents from "../_common/hooks/trackEvents";
import whatsappHref from "../_common/constant/whatsappHref";

const Partners = () => {
  const logoList = [
    BottegaLogo,
    CangguLogo,
    GuttenLogo,
    LimaLogo,
    SkipJackLogo,
    SoiLogo,
    LucyLogo,
    ScowpLogo,
    ThreeLogo,
    AnthologyLogo,
    HauseLogo,
    WilliamsLogo,
  ];

  return (
    <div className="flex w-full flex-col items-center gap-20">
      <p className="before:title-outline-red relative z-0 w-full text-center text-4xl font-black text-darkRed before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['OUR_PARTNERS'] xs:text-5xl">
        OUR PARTNERS
      </p>
      <div className="flex flex-wrap justify-center gap-6 px-10 xs:gap-12 sm:px-20 lg:px-40">
        {logoList.map((el, i) => (
          <div
            className="relative h-32 w-32 bg-white grayscale-[100%] transition-all duration-200 ease-out hover:scale-105 hover:grayscale-0"
            key={i}
          >
            <Image
              src={el}
              layout="fill"
              objectFit="contain"
              alt="ECOPLEASE best eco-friendly, sustainable, and compostable partner logo"
            />
          </div>
        ))}
      </div>
      <a
        href={
          whatsappHref("partner")
        }
        target="_blank"
        rel="noreferrer noopener"
        className="rounded-lg bg-darkRed px-6 py-2 text-lg text-white transition-all duration-200 ease-out hover:scale-110 hover:bg-white hover:text-darkRed hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] xs:text-xl"
        onClick={() => trackEvents("partner_click", "home")}
      >
        Become Our Partner <span className="font-bold">NOW!</span>
      </a>
    </div>
  );
};

export default Partners;
