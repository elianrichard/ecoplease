import React from "react";

import TestimonialCard from "./TestimonialCard";

import TestimonialPic from "../../../asset/pictures/home/testimonial1.jpg";
import TestimonialBackgroundImg from "../../../asset/pictures/home/home-background-2.jpg";
import TestimonialRipped from "../../../asset/svgs/ripped/TestimonialRipped";

const Testimonial = () => {
  return (
    <>
      <div
        className="w-screen bg-white py-2"
        style={{ clipPath: "url(#testimonialMask)" }}
      >
        <TestimonialRipped />
        <div
          className="flex w-full flex-col items-center justify-center bg-darkRed pt-28 pb-40"
          style={{
            clipPath: "url(#testimonialMask)",
            backgroundImage: `url(${TestimonialBackgroundImg.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="mb-14 text-4xl font-bold text-white xs:text-5xl">
            TESTIMONIALS
          </p>
          <div className="scrollbar-custom flex w-full items-center gap-20 overflow-y-hidden overflow-x-scroll px-10 pb-20 xs:px-20">
            <TestimonialCard
              name="John Doe"
              tag="@fatlicious_id"
              location="Jakarta, Indonesia"
              pic={TestimonialPic}
              description={
                "Ecoplease is top of mind of eco-packaging solution. I love to use their products as it delivers good impact to my business and climate sustainability"
              }
              rating={5}
            />
            <TestimonialCard
              name="John Doe"
              tag="@fatlicious_id"
              location="Jakarta, Indonesia"
              pic={TestimonialPic}
              description={
                "Ecoplease is top of mind of eco-packaging solution. I love to use their products as it delivers good impact to my business and climate sustainability"
              }
              rating={5}
            />
            <TestimonialCard
              name="John Doe"
              tag="@fatlicious_id"
              location="Jakarta, Indonesia"
              pic={TestimonialPic}
              description={
                "Ecoplease is top of mind of eco-packaging solution. I love to use their products as it delivers good impact to my business and climate sustainability"
              }
              rating={5}
            />
            <TestimonialCard
              name="John Doe"
              tag="@fatlicious_id"
              location="Jakarta, Indonesia"
              pic={TestimonialPic}
              description={
                "Ecoplease is top of mind of eco-packaging solution. I love to use their products as it delivers good impact to my business and climate sustainability"
              }
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
