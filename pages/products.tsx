import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { server } from "../config";

import Layout from "../modules/ProductsPage/Layout";
import { ProductsType } from "../modules/_common/types/ProductsType";

const Products: NextPage = () => {
  return <Layout />;
};

export default Products;
