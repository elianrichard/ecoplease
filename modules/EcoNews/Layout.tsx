import React from "react";
import Image from "next/image";

import EconewsRipped from "../../asset/svgs/ripped/EconewsRipped";
import EconewsRippedFlip from "../../asset/svgs/ripped/EconewsRippedFlip";
import LayoutBgImg from "../../asset/pictures/econews/layout-bg.webp";

import NewsCard from "./NewsCard";
import usePostsQuery from "../_common/queries/usePostsQuery";

const Layout = () => {
  const { isLoading, data: articles } = usePostsQuery();

  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute -z-10 h-full w-full bg-ecoRed">
        <Image
          src={LayoutBgImg}
          alt="ecoplease background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
        />
      </div>
      <EconewsRipped />
      <EconewsRippedFlip />
      <div className="min-h-screen w-full bg-black/30 py-16 px-10 sm:px-16">
        <div className="mb-16 text-center text-skinCream">
          <p className="before:title-outline-skinCream relative z-0 mb-5 text-4xl font-bold before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['ECO_NEWS'] sm:text-5xl">
            ECO NEWS
          </p>
          <p className="text-lg sm:text-xl">
            Your daily dose of eco-friendly news
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {articles && !isLoading ? (
            articles.map((el, i) => <NewsCard article={el} index={i} key={i} />)
          ) : (
            <p className="text-center text-4xl font-bold text-skinCream sm:text-5xl md:text-6xl">
              LOADING...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
