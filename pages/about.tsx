import React from "react";
import { NextPage } from "next";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/AboutPage/Layout";

const About: NextPage = () => {
  const aboutSeo = {
    title: "About",
    description:
      "ECOPLEASE about section, vision, mission, and logo explanation",
  };
  
  return (
    <>
      <MetaHead {...aboutSeo} />
      <Layout />
    </>
  );
};

export default About;
