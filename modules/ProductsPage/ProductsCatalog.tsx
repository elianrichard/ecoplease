import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProductCard from "./ProductCard";

import ProductImg from "../../asset/pictures/products/product-sample.jpg";
import PaperTextureImg from "../../asset/pictures/paper-texture-3.png";

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

type CategoryListType =
  | "cups"
  | "straw"
  | "cutlery"
  | "packaging"
  | "all_product";

const ProductsCatalog = () => {
  const categoryList = ["all_product", "cups", "straw", "cutlery", "packaging"];
  const [productLists, setProductLists] = useState(productsPlaceholder);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryListType>("all_product");

  useEffect(() => {
    if (selectedCategory === "all_product")
      setProductLists(productsPlaceholder);
    else {
      const filtered = productsPlaceholder.filter(
        (el) => el.type === selectedCategory
      );
      setProductLists(filtered);
    }
  }, [selectedCategory]);

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
              onClick={() => setSelectedCategory(el as CategoryListType)}
            >
              {el.replace("_", " ")}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            layout
            className="grid w-full grid-cols-2 gap-5 md:gap-10 sm:grid-cols-3 xl:grid-cols-4"
          >
            {productLists.map((el) => (
              <ProductCard key={el.id} product={el} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsCatalog;
