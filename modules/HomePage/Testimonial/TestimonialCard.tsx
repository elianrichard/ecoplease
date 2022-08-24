import React from "react";
import Image, { StaticImageData } from "next/image";

import StarSVG from "../../../asset/svgs/icons/StarIcon";

interface Props {
  name: String;
  tag: String;
  location: String;
  pic: StaticImageData;
  description: String;
  rating: number;
}

const TestimonialCard = ({
  name,
  tag,
  location,
  pic,
  description,
  rating,
}: Props) => {
  return (
    <div className="relative h-56 min-w-[24rem] before:absolute before:top-2 before:left-2 before:h-full before:w-full before:rounded-3xl before:rounded-br-none before:bg-darkGreen xs:h-72">
      <div className="absolute top-0 left-0 flex h-full w-full flex-col gap-2 rounded-3xl rounded-br-none border-[6px] border-darkGreen bg-skinCream py-3 px-5 xs:gap-3 xs:p-7">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-md font-bold xs:text-lg">
              {name} | {tag}
            </p>
            <p className="text-sm xs:text-base">{location}</p>
          </div>
          <div className="relative aspect-square h-full overflow-hidden rounded-full">
            <Image src={pic} layout="fill" alt="image of a person" />
          </div>
        </div>
        <div className="flex w-full">
          {[...Array(rating)].map((el) => (
            <StarSVG key={el} />
          ))}
        </div>
        <div className="h-full w-full overflow-hidden">
          <p className="text-sm xs:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
