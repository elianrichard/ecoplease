import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import paperTextureImg from "../../../asset/pictures/paper-texture-2.webp";
// import VideoThumbnailImg from "../../../asset/pictures/home/landing-hero.webp";
// import VideoRippedPaper from "../../../asset/svgs/ripped/VideoRippedPaper";
import Counter from "./Counter";

interface Props {
  setVideoModal?: Dispatch<SetStateAction<boolean>>;
}

const VideoCounter = ({ setVideoModal }: Props) => {
  return (
    <div className="relative mb-1 flex h-full w-screen justify-center bg-skinCream lg:h-screen">
      <div className="absolute h-full w-full">
        <Image
          src={paperTextureImg}
          alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
        />
      </div>
      <div className="z-10 flex h-full w-full flex-col-reverse justify-center gap-20 px-10 py-24 lg:flex-row lg:py-0 xl:w-4/5 xl:px-0">
        <div className="flex h-full w-full flex-1 items-center justify-center">
          {/* <div
            className="group relative aspect-video w-full cursor-pointer"
            onClick={() => setVideoModal(true)}
          > */}
          {/* <VideoRippedPaper />
            <div
              className="relative aspect-video w-full bg-skinCream/80 brightness-50 grayscale-[20%] sepia"
              style={{
                clipPath: "url(#videoMask)",
              }}
            >
              <Image
                src={VideoThumbnailImg}
                alt="ECOPLEASE best eco-friendly, sustainable, and compostable video thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
          {/* <div
              className="absolute top-1/2 left-1/2 aspect-square w-14 -translate-x-1/2 -translate-y-1/2 bg-ecoRed transition-all duration-200 ease-out group-hover:bg-darkRed xs:w-20"
              style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
            /> */}
          {/* </div> */}
          <div className="aspect-video w-full bg-black px-5 xs:px-0">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/XT6M2xSCNF8?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
