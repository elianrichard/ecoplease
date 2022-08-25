import React from "react";

import TextureImg from "../../asset/pictures/paper-texture-3.png";
import OurMissionBgImg from "../../asset/pictures/about/our-mission-bg.png";
import OurVisionBgImg from "../../asset/pictures/about/our-vision-bg.png";

const VisionMission = () => {
  return (
    <div className="mb-1 flex w-screen flex-col">
      <div className="flex h-80 w-full">
        <div
          className="flex flex-[2] items-center bg-skinCream"
          style={{
            backgroundImage: `url(${TextureImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="w-full text-center text-6xl font-bold uppercase leading-tight text-darkRed">
            Our
            <br />
            Vision
          </p>
        </div>
        <div
          className="flex flex-[3] items-center bg-darkRed"
          style={{
            backgroundImage: `url(${OurVisionBgImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center center",
          }}
        >
          <p className="w-full px-20 text-xl text-white">
            Creating a world that embraces{" "}
            <span className="bg-white px-2 font-bold text-darkRed">
              eco-decisions
            </span>{" "}
            (a generation that chooses eco-friendly products whenever the option
            is available).
          </p>
        </div>
      </div>
      <div></div>
      <div className="flex h-80 w-full flex-row-reverse">
        <div
          className="flex flex-[2] items-center bg-skinCream"
          style={{
            backgroundImage: `url(${TextureImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="w-full text-center text-6xl font-bold uppercase leading-tight text-darkRed">
            Our
            <br />
            Mission
          </p>
        </div>
        <div
          className="flex flex-[3] items-center bg-darkRed"
          style={{
            backgroundImage: `url(${OurMissionBgImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center center",
          }}
        >
          <p className="w-full px-20 text-right text-xl text-white">
            To provide a range of 100% Home Compostable products as an{" "}
            <span className="bg-white px-2 font-bold text-darkRed">
              alternatives
            </span>{" "}
            to non-eco friendly products
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VisionMission;
