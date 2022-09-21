import React, { useEffect, useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";

import { server } from "../../../../config";
import axios from "axios";

import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

import { PostsType } from "../../../../modules/_common/types/PostType";
import getProperDate from "../../../../modules/_common/hooks/getProperDate";
import useMediaQuery from "../../../../modules/_common/queries/useMediaQuery";

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

  return (
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
                  alt="econews"
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
                <a href="#" target="_blank" rel="norefferer">
                  <FaWhatsapp />
                </a>
                <a href="#" target="_blank" rel="norefferer">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank" rel="norefferer">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="norefferer">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="norefferer">
                  <FaLink />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      title: el.title.rendered.toString(),
    },
  }));

  return {
    paths: newPaths,
    fallback: false,
  };
};
