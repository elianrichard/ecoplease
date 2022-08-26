import React from "react";

import KopiKenanganSVG from "../../asset/svgs/kopiKenangan";

const Partners = () => {
  return (
    <div className="flex w-full flex-col items-center gap-20">
      <p className="before:title-outline-red relative z-0 w-full text-center text-4xl font-black text-darkRed before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['OUR_PARTNERS'] xs:text-5xl">
        OUR PARTNERS
      </p>
      <div className="flex flex-wrap justify-center gap-6 xs:gap-12">
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
      </div>
      <a
        href="#"
        className="rounded-lg bg-darkRed px-6 py-2 text-lg text-white transition-all duration-200 ease-out hover:scale-110 hover:bg-white hover:text-darkRed hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] xs:text-xl"
      >
        Become Our Partner <span className="font-bold">NOW!</span>
      </a>
    </div>
  );
};

export default Partners;
