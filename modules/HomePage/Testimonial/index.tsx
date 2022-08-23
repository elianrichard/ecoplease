import React from "react";

import TestimonialCard from "./TestimonialCard";

import TestimonialPic from "../../../asset/pictures/landing/testimonial1.jpg";
import TestimonialBackgroundImg from "../../../asset/pictures/landing/home-background-2.jpg";
import TestimonialRipped from "../../../asset/svgs/TestimonialRipped";

const Testimonial = () => {
  return (
    <>
      <div
        className="py-2 bg-white w-screen"
        style={{ clipPath: "url(#testimonialMask)" }}
      >
        <TestimonialRipped />
        <div
          className="pt-28 pb-40 bg-darkRed w-full flex justify-center flex-col items-center"
          style={{
            clipPath: "url(#testimonialMask)",
            backgroundImage: `url(${TestimonialBackgroundImg.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="text-white text-5xl font-bold mb-14">TESTIMONIALS</p>
          <div className="flex w-full items-center overflow-x-scroll overflow-y-hidden gap-20 px-20 pb-20 scrollbar-custom">
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
