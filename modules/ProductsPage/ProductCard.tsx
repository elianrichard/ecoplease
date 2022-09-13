import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductsType } from "../_common/types/ProductsType";

import ProductImg from "../../asset/pictures/products/product-sample.jpg";

interface Props {
  product: ProductsType
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full cursor-pointer overflow-hidden rounded-xl"
      >
        <div className="relative aspect-square w-full bg-darkRed">
          <Image src={ProductImg} layout="fill" alt="packaging" />
          <div className="absolute right-0 top-0 rounded-bl-xl bg-white px-4 py-1 text-sm font-bold uppercase text-ecoRed xs:text-base">
            {product.acf.category}
          </div>
        </div>
        <div className="bg-white px-5 py-3 text-ecoRed">
          <p className="text-base font-bold md:text-lg capitalize">{product.title.rendered}</p>
          <p className="text-sm md:text-base capitalize">{product.acf.material}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
