import React, { Dispatch, SetStateAction } from "react";

import paperTextureImg from "../../asset/pictures/paper-texture-2.jpg";
import VideoRippedPaper from "../../asset/svgs/ripped/VideoRippedPaper";
import VideoThumbnailImg from "../../asset/pictures/home/landing-hero.jpg";

interface Props {
  setVideoModal: Dispatch<SetStateAction<boolean>>;
}

const VideoCounter = ({ setVideoModal }: Props) => {
  return (
    <div
      className="mb-1 flex h-full w-screen justify-center bg-skinCream py-24 lg:h-screen lg:py-0"
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
            <VideoRippedPaper />
            <div
              className="aspect-video w-full bg-skinCream/80 brightness-50 grayscale-[20%] sepia"
              style={{
                clipPath: "url(#videoMask)",
                backgroundImage: `url(${VideoThumbnailImg.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundBlendMode: "multiply",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 aspect-square w-14 -translate-x-1/2 -translate-y-1/2 bg-ecoRed transition-all group-hover:bg-darkRed xs:w-20"
              style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
            />
          </div>
        </div>
        <div className=" flex h-full w-full flex-1 flex-col items-center justify-center">
          <div className="grid h-full w-full grid-cols-2 gap-y-10 text-5xl font-black text-darkRed sm:text-6xl lg:h-1/2 lg:gap-y-0 xs:grid-cols-3">
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
