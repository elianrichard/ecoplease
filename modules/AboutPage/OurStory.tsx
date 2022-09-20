import React from "react";
import Image from "next/image";

import TextureImg from "../../asset/pictures/paper-texture-3.webp";
import OurStoryBgImg from "../../asset/pictures/about/our-story-bg.webp";

const OurStory = () => {
  return (
    <div className="mb-1 flex w-screen flex-col md:h-[calc(100vh-64px)] md:flex-row">
      <div className="relative flex h-full flex-[2] items-center justify-center text-center text-4xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl lg:leading-tight">
        <div className="absolute -z-10 h-full w-full bg-darkRed">
          <Image
            src={OurStoryBgImg}
            alt="ecoplease background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply"
          />
        </div>
        <p className="px-10 py-10 md:py-0">Our Story</p>
      </div>
      <div className="relative h-full flex-[4] lg:flex-[3]">
        <div className="absolute -z-10 h-full w-full bg-skinCream">
          <Image
            src={TextureImg}
            alt="ecoplease background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 px-10 py-10 text-lg md:py-0 lg:px-20 xl:text-xl">
          <p className="text-4xl font-bold uppercase leading-tight xl:text-5xl xl:leading-tight">
            How we end up <br className="hidden md:block" />
            <span className="bg-darkGreen px-3 text-white">
              caring the world?
            </span>
          </p>
          <p>
            The world is <span className="font-bold text-darkRed">hurting</span>
            , and we see it
            <span className="font-bold text-darkRed"> everyday</span>.
          </p>
          <p>
            We are so used to a
            <span className="font-bold text-darkRed">
              {" "}
              convenient lifestyle
            </span>{" "}
            that we often forget to calculate the impact that it causes to the
            environment. Here in
            <span className="font-bold text-darkRed"> Ecoplease</span>, we
            believe that convenience (single use products),{" "}
            <span className="font-bold text-darkRed">
              should not cost the environment.
            </span>
          </p>
          <p>
            We do our research and experiments to find the best eco-alternatives
            for single use plastic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
