import React from 'react'
import Image, { StaticImageData } from "next/image";

import StarSVG from "../../../asset/svgs/icons/StarIcon";

interface Props{
  name: String,
  tag: String,
  location: String,
  pic: StaticImageData,
  description: String,
  rating: number
}

const TestimonialCard = ({name, tag, location, pic, description, rating}: Props) => {
  return (
    <div className="h-64 min-w-[24rem] before:bg-darkGreen before:rounded-3xl before:rounded-br-none relative before:absolute before:top-2 before:left-2 before:h-full before:w-full">
          <div className="h-full w-full bg-skinCream rounded-3xl rounded-br-none p-7 flex flex-col gap-3 absolute top-0 left-0 border-darkGreen border-[6px]">
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <p className="font-bold text-lg">{name} | {tag}</p>
                <p>{location}</p>
              </div>
              <div className="rounded-full h-full aspect-square overflow-hidden relative">
                <Image
                  src={pic}
                  layout="fill"
                  alt="image of a person"
                />
              </div>
            </div>
            <div className="w-full flex">
              {[...Array(rating)].map((el) => (
                <StarSVG key={el} />
              ))}
            </div>
            <div>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
  )
}

export default TestimonialCard