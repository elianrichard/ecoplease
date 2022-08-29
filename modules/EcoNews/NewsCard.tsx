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
      className={`flex h-80 w-4/5 ${
        (index + 1) % 2 === 0 ? "flex-row-reverse self-end" : "flex-row"
      } overflow-hidden rounded-xl bg-skinCream`}
    >
      <div
        className="relative h-full w-3/5 bg-skinCream before:absolute before:h-full before:w-full before:bg-black/40"
        style={{
          clipPath:
            (index + 1) % 2 === 0
              ? "url(#ecoNewsMaskFlip)"
              : "url(#ecoNewsMask)",
          backgroundImage: `url(${article.image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          boxShadow: "0px 0px 88px -40px rgba(0, 0, 0) inset",
        }}
      />
      <div className="flex h-full w-2/5 translate-x-2 flex-col gap-2 p-10 text-darkRed">
        <p className="text-3xl font-bold">{article.title}</p>
        <p className="mb-5 font-bold text-ecoRed">
          {article.author} • {article.date}
        </p>
        <p>{article.excerpt}</p>
      </div>
    </div>
  );
};

export default NewsCard;
