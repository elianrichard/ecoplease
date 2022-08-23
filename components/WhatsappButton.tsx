import Link from "next/link";
import React from "react";

import WhatsappIcon from "../asset/svgs/WhatsappIcon";

const WhatsappButton = () => {
  return (
    <a
      href={"#"}
      // target="_blank"
      // rel="noreferrer"
      className="bg-white fixed w-16 h-16 bottom-10 right-10 z-50 rounded-full flex justify-center items-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)] cursor-pointer hover:bg-darkGreen transition-all group ease-out duration-200"
    >
      <WhatsappIcon
        style={{ width: "50%" }}
        className="group-hover:fill-white transition-all fill-darkGreen ease-out duration-200"
      />
    </a>
  );
};

export default WhatsappButton;
