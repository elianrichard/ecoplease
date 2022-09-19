import React from "react";

import TestimonialCard from "./TestimonialCard";

import BlankPersonPic from "../../../asset/pictures/home/blank_profile.webp";
import TestimonialBackgroundImg from "../../../asset/pictures/home/home-background-2.webp";
import TestimonialRipped from "../../../asset/svgs/ripped/TestimonialRipped";

const testimonialsData = [
  {
    image: BlankPersonPic,
    name: "nikho",
    tag: "Tokopedia",
    subtitle: "Customer",
    stars: 5,
    desc: "udah berkali2 pesan disini selalu mantappp! Bagus banget kualitas produk nya. Seller juga 👏🏻👏🏻",
  },
  {
    image: BlankPersonPic,
    name: "dian",
    tag: "Tokopedia",
    subtitle: "Customer",
    stars: 5,
    desc: "Salah satu yang bikin repeat order itu teksturnya tetap kokoh walaupun bukan dari plastik, jujur suka bingung gimana cara ngurangin penggunaan sampah plastik di industri kuliner...",
  },
  {
    image: BlankPersonPic,
    name: "Ika",
    tag: "Tokopedia",
    subtitle: "Customer",
    stars: 5,
    desc: "Cakep banget packagingnya!!! Buat jualan cakep bgtttt 100% will reorder. Material Produk Bagus Warna Sesuai",
  },
  {
    image: BlankPersonPic,
    name: "Adis",
    tag: "Tokopedia",
    subtitle: "Customer",
    stars: 5,
    desc: "barang sesuai semua tidak ada yang cacat sedikit pun, respond seller cepat , hari libur pun tetap di kirim",
  },
  {
    image: BlankPersonPic,
    name: "Felix",
    tag: "Tokopedia",
    subtitle: "Customer",
    stars: 5,
    desc: "Barangny bagus bgt si ini, bner anti leak dan eco friendly. seler ny super gercep dn ramah.. recommended, tq ❤️🙏🏻",
  },
];

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
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="mb-14 text-4xl font-bold text-white xs:text-5xl">
            TESTIMONIALS
          </p>
          <div className="scrollbar-custom flex w-full items-center gap-20 overflow-y-hidden overflow-x-scroll px-10 pb-20 xs:px-20">
            {testimonialsData.map((el, i) => (
              <TestimonialCard
                name={el.name}
                tag={el.tag}
                subtitle={el.subtitle}
                pic={el.image}
                description={el.desc}
                rating={el.stars}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
