import React from "react";
import { NextPage } from "next";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/EcoNews/Layout";

const EcoNews: NextPage = () => {
  const blogSeo = {
    title: "Eco News",
    description:
      "Ecoplease daily dose of news and blog about climate change, eco-friendly, sustainable, degradable, recyclable and home compostable food packaging, cups, and straw in Indonesia",
  };

  return (
    <>
      <MetaHead {...blogSeo} />
      <Layout />
    </>
  );
};

export default EcoNews;
