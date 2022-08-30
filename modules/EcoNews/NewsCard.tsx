import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  article: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    image: StaticImageData;
  };
  index: number;
}

const NewsCard = ({ article, index }: Props) => {
  return (
    <div
      className={`min-h-80 flex w-full xl:w-4/5 ${
        (index + 1) % 2 === 0
          ? "flex-col self-end sm:flex-row-reverse"
          : "flex-col sm:flex-row"
      } overflow-hidden rounded-xl bg-skinCream`}
    >
      <div
        className="min-h-80 custom-clip-econews relative h-80 w-full bg-skinCream before:absolute before:h-full before:w-full before:bg-black/40 sm:h-auto sm:w-2/5 md:w-3/5"
        style={{
          clipPath:
            (index + 1) % 2 === 0
              ? "url(#ecoNewsMaskFlip)"
              : "url(#ecoNewsMask)",
          backgroundImage: `url(${article.image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="flex h-full w-full translate-x-2 flex-col gap-2 p-6 sm:p-10 text-darkRed sm:w-3/5 md:w-2/5">
        <p className="text-2xl font-bold sm:text-3xl">{article.title}</p>
        <p className="mb-3 sm:mb-5 text-sm font-bold text-ecoRed sm:text-base">
          {article.author} • {article.date}
        </p>
        <p className="text-sm sm:text-base">{article.excerpt}</p>
      </div>
    </div>
  );
};

export default NewsCard;
