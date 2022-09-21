import type { NextPage } from "next";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/HomePage/Layout";

const Home: NextPage = () => {
  return (
    <>
      <MetaHead />
      <Layout />
    </>
  );
};

export default Home;
