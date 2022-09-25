import React from "react";
import { IconContext } from "react-icons";
import { FaPaintBrush } from "react-icons/fa";
import { AiOutlineSafetyCertificate, AiOutlineLock } from "react-icons/ai";
import DeliveryIcon from "../../../asset/svgs/icons/DeliveryIcon";

import ItemsCard from "./ItemsCard";

const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div className="rounded-xl bg-ecoRed px-7 py-2 text-2xl font-bold text-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)] xs:text-4xl sm:text-3xl">
        OUR PERKS
      </div>
      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 xs:gap-10 lg:grid-cols-4 xl:gap-20">
        <IconContext.Provider value={{ color: "#fff", className: "h-28" }}>
          <ItemsCard title="Free Delivery" description="???">
            <DeliveryIcon className="w-20" />
          </ItemsCard>
          <ItemsCard title="Customize Logo" description="???">
            <FaPaintBrush className="w-[60px]" />
          </ItemsCard>
          <ItemsCard title="Commitment" description="???">
            <AiOutlineLock className="w-[70px]" />
          </ItemsCard>
          <ItemsCard title="Certification" description="???">
            <AiOutlineSafetyCertificate className="w-[70px]" />
          </ItemsCard>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Perks;
