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
      console.log(filtered);
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
      <div className="flex w-4/5 flex-col items-center gap-14">
        <div className="flex w-full items-center gap-5">
          {categoryList.map((el, i) => (
            <button
              key={i}
              className={`flex-1 rounded-xl py-3 text-xl font-bold uppercase transition-all duration-200 ease-out ${
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
          <motion.div layout className="grid w-full grid-cols-4 gap-10">
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
