import React from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import NewsImg from "../../../asset/pictures/econews/news-bg-1.png";

const index = () => {
  return (
    <div className="bg-skinCream py-16 px-10 lg:py-28 lg:px-28">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex flex-[4] flex-col gap-10">
          <div>
            <p className="mb-2">Jason Hendriks - Dec, 27 2022</p>
            <p className="text-4xl font-bold">
              How to know if there is plastic in your stuff?
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src={NewsImg}
              layout="fill"
              objectFit="cover"
              alt="econews"
            />
          </div>
          <div>
            <p className="mb-2 text-3xl font-bold">What is plastic?</p>
            <div className="flex flex-col gap-5 text-lg">
              <p>
                Almost all products that we use, whether it&apos;s your phone,
                your clothes or coffee cups, or your beauty & makeup products
                will have some form of plastic in them. It&apos;s hard not to
                when plastic is cheap, easy to turn into anything, and last
                forever.
              </p>
              <p>
                But when you want to buy a product, wouldn&apos;t you want to
                know if what you&apos;re purchasing has plastic in it?
              </p>
              <p>
                But don&apos;t get paranoid. You won&apos;t turn into a plastic
                yourself (unless you&apos;re Regina George), But it&apos;s good
                knowledge to know if the stuff you&apos;re using has plastic in
                it. So you can be an informed and responsible citizen.
              </p>
              <p>
                Knowing what type of plastic can help you manage if you should
                buy it, if you can reuse it, and how to recycle it. So
                let&apos;s find out more about plastic!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-row gap-6 sm:gap-14 md:flex-col md:border-l-2 md:border-black md:pl-10">
            <IconContext.Provider value={{ className: "w-8 h-8" }}>
              <a href="#" target="_blank" rel="norefferer">
                <FaWhatsapp />
              </a>
              <a href="#" target="_blank" rel="norefferer">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="norefferer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="norefferer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="norefferer">
                <FaLink />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
