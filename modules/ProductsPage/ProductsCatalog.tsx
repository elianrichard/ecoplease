import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";

import ProductCard from "./ProductCard";

import ProductImg from "../../asset/pictures/products/product-sample.jpg";
import PaperTextureImg from "../../asset/pictures/paper-texture-3.png";
import useProductsQuery from "../_common/queries/useProductsQuery";
import { ProductsType } from "../_common/types/ProductsType";

const productsPlaceholder = [
  {
    name: "Product A",
    material: "Sugarcane",
    type: "packaging",
    image: ProductImg,
    id: 1,
  },
  {
    name: "Product B",
    material: "Bamboo",
    type: "cups",
    image: ProductImg,
    id: 2,
  },
  {
    name: "Product C",
    material: "Sugarcane",
    type: "cutlery",
    image: ProductImg,
    id: 3,
  },
  {
    name: "Product D",
    material: "Bamboo",
    type: "straw",
    image: ProductImg,
    id: 4,
  },
  {
    name: "Product E",
    material: "Bamboo",
    type: "cups",
    image: ProductImg,
    id: 5,
  },
  {
    name: "Product F",
    material: "Sugarcane",
    type: "straw",
    image: ProductImg,
    id: 6,
  },
];

const ProductsCatalog = () => {
  // const categoryList = ["all_product", "cups", "straw", "cutlery", "packaging"];
  const [productLists, setProductLists] = useState<ProductsType[]>();
  const [selectedCategory, setSelectedCategory] =
    useState("all_product");

  const { data, isLoading } = useProductsQuery();
  const productsData = data?.data;
  const allCategoryLists = productsData?.map((el) => el.acf.category);
  const categoryList = ["all_product"].concat(_.uniq(allCategoryLists));

  useEffect(() => {
    if (selectedCategory === "all_product")
      setProductLists(productsData);
    else {
      const filtered = productsData?.filter(
        (el) => el.acf.category === selectedCategory
      );
      setProductLists(filtered);
    }
  }, [productsData, selectedCategory]);

  console.log(productLists, selectedCategory)

  return (
    <div
      className="mb-1 flex w-screen flex-col items-center bg-skinCream py-14"
      style={{
        backgroundImage: `url(${PaperTextureImg.src})`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex w-full flex-col items-center gap-14 px-5 sm:w-4/5 sm:px-0">
        <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-5">
          {categoryList.map((el, i) => (
            <button
              key={i}
              className={`h-full rounded-xl py-3 px-3 text-base font-bold uppercase transition-all duration-200 ease-out sm:text-lg xl:text-xl ${
                el === selectedCategory
                  ? "bg-darkRed text-white"
                  : "bg-white text-ecoRed"
              }`}
              onClick={() => setSelectedCategory(el)}
            >
              {el.replace("_", " ")}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            layout
            className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:gap-10 xl:grid-cols-4"
          >
            {productLists?.map((el) => (
              <ProductCard key={el.id} product={el} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsCatalog;
