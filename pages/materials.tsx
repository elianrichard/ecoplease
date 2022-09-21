import React from "react";
import { NextPage } from "next";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/MaterialsPage/Layout";

const Materials: NextPage = () => {
  const materialSeo = {
    title: "Product Materials",
    description:
      "ECOPLEASE believe in natural and renewable materials. Our company only use materials that can be harvested, replenished and regenerated without any adverse effect on environment.",
  };

  return (
    <>
      <MetaHead {...materialSeo} />
      <Layout />
    </>
  );
};

export default Materials;
