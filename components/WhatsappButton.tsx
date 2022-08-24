import Link from "next/link";
import React from "react";

import { IconContext } from "react-icons";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <a
      href={"#"}
      // target="_blank"
      // rel="noreferrer"
      className="group fixed bottom-3 right-3 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out hover:bg-darkGreen lg:bottom-10 lg:right-10"
    >
      <IconContext.Provider
        value={{
          className:
            "w-1/2 h-1/2 fill-darkGreen group-hover:fill-white transition-all duration-200 ease-out",
        }}
      >
        <BsWhatsapp />
      </IconContext.Provider>
    </a>
  );
};

export default WhatsappButton;
