import React from "react";

import EconewsRipped from "../../asset/svgs/ripped/EconewsRipped";
import EconewsRippedFlip from "../../asset/svgs/ripped/EconewsRippedFlip";

import NewsBgImg1 from "../../asset/pictures/econews/news-bg-1.png";
import LayoutBgImg from "../../asset/pictures/econews/layout-bg.jpg";
import NewsCard from "./NewsCard";

const newsPlaceholder = [
  {
    title: "How to know if there is plastic in your stuff?",
    author: "Jason Hendriks",
    date: "Dec, 27 2022",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure expedita ipsum repudiandae blanditiis excepturi vero quo porro error, tempora esse.",
    image: NewsBgImg1,
  },
  {
    title: "How to know if there is poison in your stuff?",
    author: "Jason Hendriks",
    date: "Dec, 28 2022",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure expedita ipsum repudiandae blanditiis excepturi vero quo porro error, tempora esse.",
    image: NewsBgImg1,
  },
  {
    title: "How to know if there is plastic in your stuff?",
    author: "Jason Hendriks",
    date: "Dec, 27 2022",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure expedita ipsum repudiandae blanditiis excepturi vero quo porro error, tempora esse.",
    image: NewsBgImg1,
  },
  {
    title: "How to know if there is poison in your stuff?",
    author: "Jason Hendriks",
    date: "Dec, 28 2022",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure expedita ipsum repudiandae blanditiis excepturi vero quo porro error, tempora esse.",
    image: NewsBgImg1,
  },
];

const Layout = () => {
  return (
    <div
      className="relative min-h-screen w-screen bg-ecoRed"
      style={{
        backgroundImage: `url(${LayoutBgImg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <EconewsRipped />
      <EconewsRippedFlip />
      <div className="min-h-screen w-full bg-black/30 sm:px-16 py-16 px-10">
        <div className="mb-16 text-center text-skinCream">
          <p className="before:title-outline-skinCream relative z-0 mb-5 text-4xl sm:text-5xl font-bold before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['ECO_NEWS']">
            ECO NEWS
          </p>
          <p className="text-lg sm:text-xl">Your daily dose of eco-fiendly news</p>
        </div>
        <div className="flex flex-col gap-10">
          {newsPlaceholder.map((el, i) => (
            <NewsCard article={el} index={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
