import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import { server } from "../../../../config";
import axios from "axios";

import { IconContext } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

import { ProductJsonLd, ProductJsonLdProps } from "next-seo";
import MetaHead from "../../../../modules/_common/MetaHead";

import { ProductsType } from "../../../../modules/_common/types/ProductsType";
import useMediaQueries from "../../../../modules/_common/queries/useMediaQueries";

import PaperTextureImg from "../../../../asset/pictures/paper-texture-3.webp";
import LoadingIcon from "../../../../components/LoadingIcon";

interface Props {
  product: ProductsType;
}

const Layout: NextPage<Props> = ({ product }: Props) => {
  const descDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const [descDivPos, setDescDivPos] = useState(600);

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
  const imageIds = product.acf.images;

  const imageQueries = useMediaQueries(imageIds);

  const imageLinks =
    imageQueries?.map((el) => el.data?.data.guid.rendered) || [];

  const productSeo = {
    title: product.title.rendered,
    description: `ECOPLEASE ${product.title.rendered}`,
    openGraph: {
      images: imageQueries.map((el) => ({
        url: el.data?.data.guid.rendered,
        width: el.data?.data.media_details.width,
        height: el.data?.data.media_details.height,
        alt: el.data?.data.alt_text,
      })),
    },
  };

  const productDetailJsonLd: ProductJsonLdProps = {
    productName: product.title.rendered,
    images: imageLinks.map((el) => el || ""),
    description: `ECOPLEASE best eco-friendly, sustainable, degradable, recyclable and 100% home compostable ${product.title.rendered} ${product.acf.category} in Indonesia`,
    brand: "ECOPLEASE",
    color: product.acf.colors,
    material: product.acf.material,
    slogan: `ECOPLEASE best eco-friendly, sustainable, degradable, recyclable and 100% home compostable ${product.title.rendered} ${product.acf.category} in Indonesia`,
    disambiguatingDescription: `${product.title.rendered}, best 100% home compostable ${product.acf.category} in Indonesia`,
    award: `Best 100% home compostable ${product.acf.category} in Indonesia`,
    aggregateRating: {
      ratingValue: "5",
      reviewCount: `${2000 + product.id}`,
    },
    reviews: [
      {
        author: "Jim",
        reviewRating: {
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
    ],
  };

  return (
    <>
      <MetaHead {...productSeo} />
      <ProductJsonLd {...productDetailJsonLd} />
      <div
        className="relative flex w-screen flex-col bg-ecoRed sm:flex-row"
        ref={descDiv}
      >
        <div className="scrollbar-custom flex flex-[2] flex-row overflow-x-scroll sm:flex-col sm:overflow-x-hidden lg:flex-1 ">
          {imageLinks.map((el, i) => (
            <div
              className="relative aspect-square h-72 sm:h-auto sm:w-full"
              key={i}
            >
              {!imageQueries[i].isLoading && el ? (
                <Image
                  src={el}
                  layout="fill"
                  objectFit="cover"
                  alt={`ECOPLEASE ${imageQueries[i].data?.data.title} product image`}
                />
              ) : (
                <LoadingIcon />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex-[3] lg:flex-[2]">
          <div
            className={`${
              descDiv.current?.clientHeight > descDivPos
                ? "sm:fixed sm:top-[64px] sm:bottom-auto"
                : "sm:absolute sm:bottom-0"
            } relative flex w-screen sm:h-[calc(100vh-64px)] sm:w-[60vw] lg:w-[66.67vw]`}
          >
            <div className="absolute h-full w-full bg-ecoRed">
              <Image
                src={PaperTextureImg}
                alt="ECOPLEASE best eco-friendly, sustainable, and compostable product background"
                layout="fill"
                objectFit="cover"
                className="mix-blend-multiply"
              />
            </div>
            <div className="z-20 flex h-full w-full flex-col px-10 py-10 sm:px-14 lg:px-20">
              <div className="product-scrollbar mb-5 flex h-full w-full flex-col gap-10 overflow-x-hidden text-white sm:overflow-y-scroll">
                <div>
                  <h1
                    className={`${
                      product.acf.price ? "mb-2" : ""
                    } text-2xl font-bold md:text-3xl`}
                  >
                    <span className="uppercase text-skinCream">
                      {product.acf.code}
                    </span>{" "}
                    / {product.title.rendered}
                  </h1>
                  {product.acf.price && (
                    <p className="text-xl font-semibold md:text-2xl">
                      Rp {product.acf.price}
                    </p>
                  )}
                </div>
                <div className="text-lg md:text-xl">
                  <p className="w-fit bg-white px-3 font-bold text-ecoRed">
                    Size:
                  </p>
                  <p>{product.acf.size}</p>
                  <p className="capitalize">
                    <span className="bg-white px-3 font-bold text-ecoRed">
                      Material:
                    </span>{" "}
                    {product.acf.material}
                  </p>
                  <p className="capitalize">
                    <span className="bg-white px-3 font-bold text-ecoRed">
                      Colors Available:
                    </span>{" "}
                    {product.acf.colors}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold md:text-xl">
                    Product Characteristic
                  </p>
                  <ol className="md:text-lg">
                    {product.acf.product_characteristic
                      .split("\r\n")
                      .map((el, i) => (
                        <li key={i}>
                          {i + 1}. {el}
                        </li>
                      ))}
                  </ol>
                </div>
                {/* <div className="flex items-center gap-3 text-lg font-bold md:text-xl">
              <p>Colors Available:</p>
              {productPlaceholder.color.map((el, i) => (
                <div
                className="aspect-square h-6"
                style={{ backgroundColor: el }}
                key={i}
                ></div>
                ))}
              </div> */}
              </div>
              <div className="flex flex-col items-center gap-2 text-white xs:items-start md:text-xl">
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
                <div className="flex flex-col gap-2 xs:flex-row xs:gap-5">
                  <a
                    href={"https://tokopedia.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline rounded-xl bg-green-700 px-3 py-2 text-white transition-all duration-200 ease-out hover:bg-white hover:text-green-700"
                  >
                    Buy at Tokopedia
                  </a>
                  <a
                    href={"https://shopee.com"}
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
      </div>
    </>
  );
};

export default Layout;

export const getStaticProps = async (context: { params: { id: number } }) => {
  const post = await axios.get(
    `${server}/wp-json/wp/v2/products/${context.params.id}`
  );
  return {
    props: {
      product: post.data,
    },
  };
};

export const getStaticPaths = async () => {
  const products = await axios.get(`${server}/wp-json/wp/v2/products/`);
  const newPaths = products.data.map((el: ProductsType) => ({
    params: {
      id: el.id.toString(),
      name: el.title.rendered.toString(),
    },
  }));

  return {
    paths: newPaths,
    fallback: false,
  };
};
