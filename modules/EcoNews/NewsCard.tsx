import React from "react";
import Link from "next/link";

import { PostsType } from "../_common/types/PostType";
import getProperDate from "../_common/hooks/getProperDate";
import useMediaQuery from "../_common/queries/useMediaQuery";

interface Props {
  article: PostsType;
  index: number;
}

const NewsCard = ({ article, index }: Props) => {
  const { data } = useMediaQuery(article.featured_media);
  const imageLink = data?.data.guid.rendered;

  const blogDate = new Date(article.date);
  const blogProperDate = getProperDate(blogDate);

  return (
    <Link
      href={{
        pathname: "/econews/[id]/[title]",
        query: {
          id: article.id,
          title: article.title.rendered,
        },
      }}
    >
      <div
        className={`min-h-80 flex w-full xl:w-4/5 ${
          (index + 1) % 2 === 0
            ? "flex-col self-end sm:flex-row-reverse"
            : "flex-col sm:flex-row"
        } cursor-pointer overflow-hidden rounded-xl bg-skinCream transition-transform duration-200 ease-out hover:scale-110`}
      >
        <div
          className="min-h-80 custom-clip-econews relative h-80 w-full bg-skinCream before:absolute before:h-full before:w-full before:bg-black/40 sm:h-auto sm:w-2/5 md:w-3/5"
          style={{
            clipPath:
              (index + 1) % 2 === 0
                ? "url(#ecoNewsMaskFlip)"
                : "url(#ecoNewsMask)",
            backgroundImage: `url(${imageLink})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
          }}
        />
        <div className="flex h-full w-full flex-col gap-2 p-6 text-darkRed sm:w-3/5 sm:translate-x-2 sm:p-10 md:w-2/5">
          <p className="text-2xl font-bold sm:text-3xl">
            {article.title.rendered}
          </p>
          <p className="mb-3 text-sm font-bold text-ecoRed sm:mb-5 sm:text-base">
            {blogProperDate}
          </p>
          <p className="text-sm sm:text-base">
            {article.excerpt.rendered.replace("<p>", "").replace("</p>", "")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
