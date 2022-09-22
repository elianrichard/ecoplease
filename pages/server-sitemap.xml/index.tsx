import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

import { domain, server } from "../../config";
import axios, { AxiosResponse } from "axios";

import { PostsType } from "../../modules/_common/types/PostType";

const Sitemap = () => {
  return;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urls: AxiosResponse<PostsType[]> = await axios.get(
    `${server}/wp-json/wp/v2/posts`
  );

  const fields = urls.data.map((el) => ({
    loc: `${domain}/econews/${el.id}/${el.title.rendered
      .replaceAll(" ", "-")
      .replaceAll(/[^a-z0-9-]/gi, "")}`,
    lastmod: new Date(el.modified).toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default Sitemap;
