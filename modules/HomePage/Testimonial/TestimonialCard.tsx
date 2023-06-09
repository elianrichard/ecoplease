import React from "react";
import Image, { StaticImageData } from "next/image";

import { IconContext } from "react-icons";
import { GrStar } from "react-icons/gr";

interface Props {
  name: String;
  tag: String;
  subtitle: String;
  pic: StaticImageData;
  description: String;
  rating: number;
}

const TestimonialCard = ({
  name,
  tag,
  subtitle,
  pic,
  description,
  rating,
}: Props) => {
  return (
    <div className="relative h-56 min-w-[24rem] before:absolute before:top-2 before:left-2 before:h-full before:w-full before:rounded-3xl before:rounded-br-none before:bg-lightYellow xs:h-72">
      <div className="absolute top-0 left-0 flex h-full w-full flex-col gap-2 rounded-3xl rounded-br-none border-[6px] border-ecoRed bg-skinCream py-3 px-5 xs:gap-3 xs:p-7">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-md font-bold xs:text-lg">
              {name}
              {tag ? ` | ${tag}` : ""}
            </p>
            <p className="text-sm xs:text-base">{subtitle}</p>
          </div>
          <div className="relative aspect-square h-full overflow-hidden rounded-full">
            <Image src={pic} layout="fill" alt="ECOPLEASE best eco-friendly, sustainable, and compostable person image" />
          </div>
        </div>
        <div className="flex w-full">
          <IconContext.Provider value={{ className: "w-5 h-5 sm:w-6 sm:h-6" }}>
            {[...Array(rating)].map((_el, i) => (
              // <StarSVG key={i} />
              <GrStar key={i} />
            ))}
          </IconContext.Provider>
        </div>
        <div className="h-full w-full overflow-hidden">
          <p className="text-sm xs:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
