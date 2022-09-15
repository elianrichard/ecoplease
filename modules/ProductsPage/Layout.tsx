import React from "react";
import { ProductsType } from "../_common/types/ProductsType";

import LandingHero from "./LandingHero";
import ProductsCatalog from "./ProductsCatalog";

const Layout = () => {
  return (
    <>
      <LandingHero />
      <ProductsCatalog  />
    </>
  );
};

export default Layout;
