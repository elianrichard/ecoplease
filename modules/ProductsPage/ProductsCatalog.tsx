import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";

import ProductCard from "./ProductCard";

import PaperTextureImg from "../../asset/pictures/paper-texture-3.webp";
import useProductsQuery from "../_common/queries/useProductsQuery";
import { ProductsType } from "../_common/types/ProductsType";

const ProductsCatalog = () => {
  const [productLists, setProductLists] = useState<ProductsType[]>();
  const [selectedCategory, setSelectedCategory] = useState("all_product");
  const { data, isLoading } = useProductsQuery();
  const productsData = data?.data;
  const allCategoryLists = productsData?.map((el) => el.acf.category);
  const categoryList = ["all_product"].concat(_.uniq(allCategoryLists));

  useEffect(() => {
    if (selectedCategory === "all_product") setProductLists(productsData);
    else {
      const filtered = productsData?.filter(
        (el) => el.acf.category === selectedCategory
      );
      setProductLists(filtered);
    }
  }, [productsData, selectedCategory]);

  return (
    <div className="relative mb-1 flex w-screen flex-col items-center">
      <div className="absolute -z-10 h-full w-full bg-skinCream">
        <Image
          src={PaperTextureImg}
          alt="ecoplease background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-14 px-5 py-14 sm:w-4/5 sm:px-0">
        <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-5">
          {categoryList.map((el, i) => (
            <button
              key={i}
              className={`h-full rounded-xl py-3 px-3 text-base font-bold uppercase transition-all duration-200 ease-out sm:text-lg xl:text-xl ${
                el === selectedCategory
                  ? "bg-darkRed text-white"
                  : "bg-white text-ecoRed hover:bg-darkRed hover:text-white"
              }`}
              onClick={() => setSelectedCategory(el)}
            >
              {el.replace("_", " ")}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {!isLoading ? (
            <motion.div
              layout
              className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:gap-10 xl:grid-cols-4"
            >
              {productLists?.map((el) => (
                <ProductCard key={el.id} product={el} />
              ))}
            </motion.div>
          ) : (
            <div className="w-full bg-ecoRed p-5 text-center text-xl font-bold uppercase text-white sm:text-5xl">
              LOADING YOUR ECO PRODUCTS...
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsCatalog;
