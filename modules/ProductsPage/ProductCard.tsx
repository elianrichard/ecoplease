import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ProductsType } from "../_common/types/ProductsType";
import useMediaQuery from "../_common/queries/useMediaQuery";

import LoadingIcon from "../../components/LoadingIcon";

interface Props {
  product: ProductsType;
}

const ProductCard = ({ product }: Props) => {
  const { data: imageData, isLoading } = useMediaQuery(product.acf.images[0]);
  const imageLink = imageData?.data.guid.rendered;
  return (
    <Link
      href={{
        pathname: "/products/[id]/[name]",
        query: {
          id: product.id,
          name: product.title.rendered,
        },
      }}
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full cursor-pointer overflow-hidden rounded-xl"
      >
        <div className="relative aspect-square w-full bg-darkRed">
          {!isLoading && imageLink ? (
            <Image src={imageLink} layout="fill" alt="packaging" />
          ) : (
            <LoadingIcon />
          )}
          <div className="absolute right-0 top-0 rounded-bl-xl bg-white px-4 py-1 text-sm font-bold uppercase text-ecoRed xs:text-base">
            {product.acf.category}
          </div>
        </div>
        <div className="bg-white px-5 py-3 text-ecoRed">
          <p className="text-base font-bold capitalize md:text-lg">
            {product.title.rendered}
          </p>
          <p className="text-sm capitalize md:text-base">
            {product.acf.material}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
