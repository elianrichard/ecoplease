import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";

import ProductImg1 from "../../asset/pictures/products/product-1.png";
import ProductImg2 from "../../asset/pictures/products/product-2.png";
import ProductImg3 from "../../asset/pictures/products/product-3.png";

import PaperTextureImg from "../../asset/pictures/paper-texture-3.png";
import { IconContext } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

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

const Layout = () => {
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
    <div className="flex w-screen flex-col bg-ecoRed sm:flex-row" ref={descDiv}>
      <div className="scrollbar-custom flex flex-[2] flex-row overflow-x-scroll sm:flex-col sm:overflow-x-hidden lg:flex-1 ">
        {productPlaceholder.imageList.map((el, i) => (
          <div
            className="relative h-72 min-w-[100vw] sm:h-96 sm:w-full sm:min-w-full"
            key={i}
          >
            <Image
              src={el}
              layout="fill"
              objectFit="cover"
              alt="product name"
            />
          </div>
        ))}
      </div>
      <div className="relative flex-[3] lg:flex-1">
        <div
          className={`${
            descDiv.current?.clientHeight > descDivPos
              ? "sm:fixed"
              : "bottom-0 sm:absolute"
          } flex w-screen flex-col bg-ecoRed px-10 py-10 sm:h-[calc(100vh-64px)] sm:w-[60vw] sm:px-14 lg:w-[50vw] lg:px-20`}
          style={{
            backgroundImage: `url(${PaperTextureImg.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="product-scrollbar mb-5 flex h-full w-full flex-col gap-10 overflow-x-hidden text-white sm:overflow-y-scroll">
            <div>
              <p className="mb-2 text-2xl font-bold md:text-3xl">
                <span className="uppercase text-skinCream">
                  {productPlaceholder.id}
                </span>{" "}
                / {productPlaceholder.name}
              </p>
              <p className="text-xl font-semibold md:text-2xl">
                Rp {productPlaceholder.price}
              </p>
            </div>
            <div className="text-lg md:text-xl">
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
              <p className="text-lg font-bold md:text-xl">
                Product Characteristic
              </p>
              <ol className="md:text-lg">
                {productPlaceholder.characteristics.map((el, i) => (
                  <li key={i}>
                    {i + 1}. {el}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex items-center gap-3 text-lg font-bold md:text-xl">
              <p>Colors Available:</p>
              {productPlaceholder.color.map((el, i) => (
                <div
                  className="aspect-square h-6"
                  style={{ backgroundColor: el }}
                  key={i}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 text-white md:text-xl">
            <IconContext.Provider value={{ className: "w-10" }}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-white transition-all duration-200 ease-out hover:bg-white hover:text-black"
              >
                Request Sample <IoIosArrowForward />
              </a>
            </IconContext.Provider>
            <div className="flex gap-5">
              <a
                href={productPlaceholder.tokpedLink}
                target="_blank"
                rel="noreferrer"
                className="inline rounded-xl bg-green-700 px-3 py-2 text-white transition-all duration-200 ease-out hover:bg-white hover:text-green-700"
              >
                Buy at Tokopedia
              </a>
              <a
                href={productPlaceholder.shopeeLink}
                target="_blank"
                rel="noreferrer"
                className="inline rounded-xl bg-orange-500 px-3 py-2 text-white transition-all duration-200 ease-out hover:bg-white hover:text-orange-500"
              >
                Buy at Shopee
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
