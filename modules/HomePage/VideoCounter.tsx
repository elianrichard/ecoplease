import React, { Dispatch, SetStateAction } from "react";

import paperTextureImg from "../../asset/pictures/paper-texture-2.jpg";
import VideoRipped from "../../asset/svgs/ripped/VideoRipped";

interface Props {
  setVideoModal: Dispatch<SetStateAction<boolean>>;
}

const VideoCounter = ({ setVideoModal }: Props) => {
  return (
    <div
      className="w-screen h-screen bg-skinCream flex justify-center mb-1"
      style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-4/5 flex justify-center gap-20">
        <div className="h-full w-full flex-1 flex justify-center items-center">
          <div
            className="w-full aspect-video relative group cursor-pointer"
            onClick={() => setVideoModal(true)}
          >
            <VideoRipped className="z-20 h-full w-full drop-shadow-[0px_0px_25px_rgba(0,0,0,0.9)]" />
            <div
              className="absolute bg-ecoRed w-20 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-darkRed transition-all"
              style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
            />
          </div>
        </div>
        <div className=" h-full w-full flex-1 justify-center items-center flex flex-col">
          <div className="grid grid-cols-3 w-full h-1/2 font-black text-6xl text-darkRed">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>100</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>50K</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>6</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>40</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>5</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p>10++</p>
              <p className="text-3xl">XXXXXX</p>
            </div>
          </div>
          {/* <div className="h-1/6 w-full bg-green-900"></div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCounter;
