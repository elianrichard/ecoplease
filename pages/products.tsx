import React from "react";
import { NextPage } from "next";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/ProductsPage/Layout";

const Products: NextPage = () => {
  const productSeo = {
    title: "Compostable Products Catalog",
    description:
      "Ecoplease eco-friendly, sustainable, degradable, recyclable and home compostable food packaging, cups, and straw product catalog in Indonesia",
  };

  return (
    <>
      <MetaHead {...productSeo} />
      <Layout />
    </>
  );
};

export default Products;
