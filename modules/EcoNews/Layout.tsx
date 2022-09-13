import React from "react";

import EconewsRipped from "../../asset/svgs/ripped/EconewsRipped";
import EconewsRippedFlip from "../../asset/svgs/ripped/EconewsRippedFlip";

import NewsCard from "./NewsCard";
import usePostsQuery from "../_common/queries/usePostsQuery";
import LayoutBgImg from "../../asset/pictures/econews/layout-bg.jpg";

const Layout = () => {
  const { isLoading, data: articles } = usePostsQuery();

  return (
    <div
      className="relative min-h-screen w-screen bg-ecoRed"
      style={{
        backgroundImage: `url(${LayoutBgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
      }}
    >
      <EconewsRipped />
      <EconewsRippedFlip />
      <div className="min-h-screen w-full bg-black/30 py-16 px-10 sm:px-16">
        <div className="mb-16 text-center text-skinCream">
          <p className="before:title-outline-skinCream relative z-0 mb-5 text-4xl font-bold before:absolute before:top-1 before:-z-10 before:translate-x-1 before:content-['ECO_NEWS'] sm:text-5xl">
            ECO NEWS
          </p>
          <p className="text-lg sm:text-xl">
            Your daily dose of eco-fiendly news
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {articles && !isLoading ? (
            articles.data.reverse().map((el, i) => <NewsCard article={el} index={i} key={i} />)
          ) : (
            <p className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-skinCream">
              LOADING...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
