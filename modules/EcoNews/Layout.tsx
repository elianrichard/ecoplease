import React from "react";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import EconewsRipped from "../../asset/svgs/ripped/EconewsRipped";
import EconewsRippedFlip from "../../asset/svgs/ripped/EconewsRippedFlip";

// import NewsBgImg1 from "../../asset/pictures/econews/news-bg-1.png";
import LayoutBgImg from "../../asset/pictures/econews/layout-bg.jpg";
import NewsCard from "./NewsCard";

import { PostsType } from "../_common/types/PostType";

const Layout = () => {
  const { isLoading, data: articles } = useQuery(
    ["posts"],
    (): Promise<AxiosResponse<PostsType[]>> => {
      return axios.get("https://ecoplease.hrefid.com/wp-json/wp/v2/posts");
    },
    {
      select: (data) => {
        const reversed = data.data.reverse();
        return reversed;
      },
    }
  );

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
            articles.map((el, i) => <NewsCard article={el} index={i} key={i} />)
          ) : (
            <p className="text-center text-6xl font-bold text-skinCream">
              LOADING...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
