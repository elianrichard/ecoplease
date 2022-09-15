import React, { Dispatch, SetStateAction } from "react";

import paperTextureImg from "../../../asset/pictures/paper-texture-2.jpg";
import VideoRippedPaper from "../../../asset/svgs/ripped/VideoRippedPaper";
import VideoThumbnailImg from "../../../asset/pictures/home/landing-hero.jpg";
import Counter from "./Counter";

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
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default VideoCounter;
