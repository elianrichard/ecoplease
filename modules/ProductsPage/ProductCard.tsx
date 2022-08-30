import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  product: {
    name: string;
    material: string;
    type: string;
    image: StaticImageData;
  };
}

const ProductCard = ({ product }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
      className="w-full overflow-hidden rounded-xl"
    >
      <div className="relative aspect-square w-full bg-darkRed">
        <Image src={product.image} layout="fill" alt="packaging" />
        <div className="absolute right-0 top-0 rounded-bl-xl bg-white px-4 py-1 font-bold uppercase text-ecoRed">
          {product.type}
        </div>
      </div>
      <div className="bg-white px-5 py-3 text-ecoRed">
        <p className="text-xl font-bold">{product.name}</p>
        <p>{product.material}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
