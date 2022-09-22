import React, { useEffect, useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";

import { domain, server } from "../../../../config";
import axios from "axios";

import { IconContext } from "react-icons";
import { FaLink, FaShareAlt, FaWhatsapp } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

import { ArticleJsonLd } from "next-seo";
import MetaHead from "../../../../modules/_common/MetaHead";

import { PostsType } from "../../../../modules/_common/types/PostType";
import getProperDate from "../../../../modules/_common/hooks/getProperDate";
import useMediaQuery from "../../../../modules/_common/queries/useMediaQuery";
import { useRouter } from "next/router";

interface Props {
  post: PostsType;
}

const BlogPost: NextPage<Props> = ({ post }: Props) => {
  const blogContent = useRef<HTMLDivElement>(null);

  const blogDate = new Date(post.date);
  const blogProperDate = getProperDate(blogDate);

  useEffect(() => {
    if (blogContent.current)
      blogContent.current.innerHTML = post.content.rendered;
  }, [post.content.rendered]);

  const { data: imageData } = useMediaQuery(post.featured_media);
  const imageLink = imageData?.data.guid.rendered;

  const postSeo = {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace("<p>", "").replace("</p>", ""),
    openGraph: {
      type: "article",
      article: {
        authors: ["ECOPLEASE"],
        section: "Sustainable Packaging",
        publishedTime: post.date,
        modifiedTime: post.modified,
        tags: ["sustainable", "packaging", "eco-friendly", "compostable"],
      },
      images: [
        {
          url: imageData?.data.guid.rendered,
          width: imageData?.data.media_details.width,
          height: imageData?.data.media_details.height,
          alt: imageData?.data.alt_text,
        },
      ],
    },
  };

  const { asPath } = useRouter();
  const realPath = decodeURIComponent(asPath).replaceAll(/[^a-z0-9-/]/gi, "");

  const postJsonLd = {
    type: "Blog" as const,
    url: `${domain + realPath}`,
    title: post.title.rendered,
    images: [imageData?.data.guid.rendered.toString() || ""],
    datePublished: post.date,
    dateModified: post.modified,
    authorName: "ECOPLEASE",
    description: post.excerpt.rendered.replace("<p>", "").replace("</p>", ""),
  };

  return (
    <>
      <MetaHead {...postSeo} />
      <ArticleJsonLd {...postJsonLd} />
      <div className="flex justify-center bg-skinCream py-16 lg:py-28">
        <div className="w-4/5 max-w-[1000px]">
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
            <div className="flex flex-[4] flex-col gap-10">
              <div>
                <p className="mb-2">{blogProperDate}</p>
                <p className="text-4xl font-bold">{post.title.rendered}</p>
              </div>
              <div className="relative h-[400px] w-full">
                {imageLink && (
                  <Image
                    src={imageLink}
                    layout="fill"
                    objectFit="cover"
                    alt={imageData?.data.alt_text || "ecoplease news image"}
                  />
                )}
              </div>
              <div
                className="flex flex-col gap-5 text-justify sm:text-lg"
                ref={blogContent}
              ></div>
              <IconContext.Provider value={{ className: "w-5 h-5 inline" }}>
                <a href="#" className="text-xl font-bold">
                  Back to Top <BsArrowUp />
                </a>
              </IconContext.Provider>
            </div>
            <div className="flex flex-1 items-center justify-center md:mt-20">
              <div className="flex flex-row gap-6 sm:gap-14 md:flex-col md:border-l-2 md:border-black md:pl-10">
                <IconContext.Provider value={{ className: "w-8 h-8" }}>
                  <a
                    href={`whatsapp://send?text=${domain}${realPath}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <FaShareAlt
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: post.title.rendered,
                            url: `${domain}${realPath}`,
                          })
                          .catch(() => alert("There's an error when sharing"));
                      } else {
                        alert("Your device isn't supported for this feature.");
                      }
                    }}
                  />
                  <FaLink
                    onClick={() => {
                      navigator.clipboard.writeText(`${domain}${realPath}`);
                      alert("Link copied to clipboard!");
                    }}
                  />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;

export const getStaticProps = async (context: { params: { id: number } }) => {
  const post = await axios.get(
    `${server}/wp-json/wp/v2/posts/${context.params.id}`
  );
  return {
    props: {
      post: post.data,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await axios.get(`${server}/wp-json/wp/v2/posts/`);
  const newPaths = posts.data.map((el: PostsType) => ({
    params: {
      id: el.id.toString(),
      title: el.title.rendered
        .replaceAll(" ", "-")
        .replaceAll(/[^a-z0-9-]/gi, ""),
    },
  }));

  return {
    paths: newPaths,
    fallback: false,
  };
};
