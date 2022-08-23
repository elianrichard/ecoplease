import React from "react";

import KopiKenanganSVG from "../../asset/svgs/kopiKenangan";

const Partners = () => {
  return (
    <div className="flex flex-col items-center w-4/5 gap-20">
      <p className="text-darkRed font-black text-5xl text-center w-full relative before:content-['OUR_PARTNERS'] before:absolute before:top-1 before:translate-x-1 text-outline z-0 before:-z-10">
        OUR PARTNERS
      </p>
      <div className="flex justify-center gap-12">
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
        <KopiKenanganSVG />
      </div>
      <a href="#" className="bg-darkRed text-white text-xl px-6 py-2 rounded-lg hover:bg-white hover:text-darkRed hover:scale-110 hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out">
        Become Our Partner <span className="font-bold">NOW!</span>
      </a>
    </div>
  );
};

export default Partners;
