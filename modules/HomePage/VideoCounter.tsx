import React, { Dispatch, SetStateAction } from "react";

import paperTextureImg from "../../asset/pictures/paper-texture-2.jpg";
import VideoRipped from "../../asset/svgs/ripped/VideoRipped";

interface Props {
  setVideoModal: Dispatch<SetStateAction<boolean>>;
}

const VideoCounter = ({ setVideoModal }: Props) => {
  return (
    <div
      className="mb-1 flex h-fit w-screen justify-center bg-skinCream py-20 lg:h-screen lg:py-0"
      style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex h-full w-full flex-col justify-center gap-20 px-10 lg:flex-row xl:w-4/5 xl:px-0">
        <div className="flex h-full w-full flex-1 items-center justify-center">
          <div
            className="group relative aspect-video w-full cursor-pointer"
            onClick={() => setVideoModal(true)}
          >
            <VideoRipped className="z-20 h-full w-full drop-shadow-[0px_0px_25px_rgba(0,0,0,0.9)]" />
            <div
              className="absolute top-1/2 left-1/2 aspect-square w-16 xs:w-20 -translate-x-1/2 -translate-y-1/2 bg-ecoRed transition-all group-hover:bg-darkRed"
              style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
            />
          </div>
        </div>
        <div className=" flex h-full w-full flex-1 flex-col items-center justify-center">
          <div className="grid h-full w-full grid-cols-2 xs:grid-cols-3 gap-y-10 text-5xl sm:text-6xl font-black text-darkRed lg:h-1/2 lg:gap-y-0">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>100</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>50K</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>6</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>40</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>5</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p>10++</p>
              <p className="text-2xl sm:text-3xl">XXXXXX</p>
            </div>
          </div>
          {/* <div className="h-1/6 w-full bg-green-900"></div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCounter;
