import { NextPage } from "next";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";

import ProductImg1 from "../../../asset/pictures/products/product-1.png";
import ProductImg2 from "../../../asset/pictures/products/product-2.png";
import ProductImg3 from "../../../asset/pictures/products/product-3.png";

import PaperTextureImg from "../../../asset/pictures/paper-texture-3.png";

const productPlaceholder = {
  name: "Burger Box",
  id: "SB102",
  price: "120.000",
  size: "6 x 6 (150x150x80) (fold size)",
  material: "Sugarcane Bagasse",
  packaging: "50pcs/inner pack",
  characteristics: [
    "Non toxic, odorless",
    "Hot oil and hot water resistant (100 C / 212 F)",
    "Microwave and refigrator safety",
    "100% biodegradable within go days after use or put in natural conditions and compostable",
  ],
  color: ["#fff", "#000"],
  tokpedLink: "https://tokopedia.com",
  shopeeLink: "https://shopee.com",
  imageList: [ProductImg1, ProductImg2, ProductImg3],
};

const Product: NextPage = () => {
  const descDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const [descDivPos, setDescDivPos] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setDescDivPos(
        e.target.documentElement.scrollTop +
          e.target.documentElement.clientHeight -
          64
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [descDivPos]);

  return (
    <div className="flex w-screen bg-ecoRed" ref={descDiv}>
      <div className="w-1/2">
        {productPlaceholder.imageList.map((el, i) => (
          <div className="relative h-96 w-full" key={i}>
            <Image
              src={el}
              layout="fill"
              objectFit="cover"
              alt="product name"
            />
          </div>
        ))}
      </div>
      <div className="relative w-1/2">
        <div
          className={`${
            descDiv.current?.clientHeight > descDivPos
              ? "fixed"
              : "absolute bottom-0"
          } h-[calc(100vh-64px)] w-[50vw] bg-ecoRed px-20 py-10`}
          style={{
            backgroundImage: `url(${PaperTextureImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="scrollbar-custom flex h-full w-full flex-col gap-10 overflow-x-hidden overflow-y-scroll text-white">
            <div>
              <p className="mb-2 text-3xl font-bold">
                <span className="uppercase text-skinCream">
                  {productPlaceholder.id}
                </span>{" "}
                / {productPlaceholder.name}
              </p>
              <p className="text-2xl font-semibold">
                Rp {productPlaceholder.price}
              </p>
            </div>
            <div className="text-xl">
              <p>
                <span className="bg-white px-3 font-bold text-ecoRed">
                  Size:
                </span>{" "}
                {productPlaceholder.size}
              </p>
              <p>
                <span className="bg-white px-3 font-bold text-ecoRed">
                  Material:
                </span>{" "}
                {productPlaceholder.material}
              </p>
              <p>
                <span className="bg-white px-3 font-bold text-ecoRed">
                  Packaging:
                </span>{" "}
                {productPlaceholder.packaging}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">Product Characteristic</p>
              <ol className="text-lg">
                {productPlaceholder.characteristics.map((el, i) => (
                  <li key={i}>
                    {i + 1}. {el}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <p>Colors Available:</p>
              {productPlaceholder.color.map((el, i) => (
                <div
                  className="aspect-square h-6"
                  style={{ backgroundColor: el }}
                  key={i}
                ></div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <a href="#">Request Sample</a>
              <a
                href={productPlaceholder.tokpedLink}
                target="_blank"
                rel="noreferrer"
              >
                Buy at Tokopedia
              </a>
              <a href={productPlaceholder.tokpedLink}>Buy at Shopee</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
