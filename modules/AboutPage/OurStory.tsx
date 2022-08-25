import React from "react";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import OurStoryBgImg from "../../asset/pictures/about/our-story-bg.jpg";

const OurStory = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] w-screen mb-1">
      <div
        className="flex h-full flex-[2] items-center justify-center bg-darkRed text-center text-7xl font-bold uppercase text-white"
        style={{
          backgroundImage: `url(${OurStoryBgImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        Our Story
      </div>
      <div
        className="h-full flex-[3] bg-skinCream"
        style={{
          backgroundImage: `url(${TextureImg.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 px-20 text-xl">
          <p className="text-5xl font-bold uppercase leading-tight">
            How we end up
            <br />
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
            <span className="font-bold text-darkRed"> convenient</span>{" "}
            lifestyle that we often forget to calculate the impact that it
            causes to the environment. Here in
            <span className="font-bold text-darkRed"> Ecoplease</span>, we
            believe that convenience (single use products),{" "}
            <span className="font-bold text-darkRed">
              should not cost the environment.
            </span>
          </p>
          <p>
            We do our research and experiments to find the best eco alternatives
            for single use plastic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
