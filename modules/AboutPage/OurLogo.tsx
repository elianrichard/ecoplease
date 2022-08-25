import React from "react";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import OurLogoBgImg from "../../asset/pictures/about/our-logo-bg.jpg";

import LogoLight from "../../asset/svgs/logo/LogoLight";

const OurLogo = () => {
  return (
    <div className="flex h-96 w-screen mb-1">
      <div
        className="h-full flex-[3] bg-darkRed text-5xl font-bold text-skinCream"
        style={{
          backgroundImage: `url(${TextureImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex h-full w-full gap-20 px-20">
          <div className="flex flex-[3] flex-col items-end justify-center gap-8">
            <p>The World.</p>
            <p>Children.</p>
            <p>Blood.</p>
          </div>
          <div className="flex h-full flex-[2] items-center justify-center">
            <LogoLight className="fill-skinCream w-52"/>
          </div>
        </div>
      </div>
      <div
        className="relative h-full flex-[2] bg-darkRed"
        style={{
          backgroundImage: `url(${OurLogoBgImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 px-20 text-white">
          <p className="text-4xl font-bold">Our Logo</p>
          <p className="text-lg">
            Click on one of the text on the left to see the description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLogo;
