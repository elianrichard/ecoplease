import React from "react";

import DeliverySVG from "../../../asset/svgs/icons/DeliveryIcon";
import ItemsCard from "./ItemsCard";

const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div className="rounded-xl bg-ecoRed px-7 py-2 text-3xl font-bold text-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)] xs:text-4xl">
        OUR PERKS
      </div>
      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 xl:gap-20 xs:gap-10">
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG />
        </ItemsCard>
        <ItemsCard
          title="FREE DELIVERY"
          description="The product can be added to composting facility"
        >
          <DeliverySVG />
        </ItemsCard>
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG />
        </ItemsCard>
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG />
        </ItemsCard>
      </div>
    </div>
  );
};

export default Perks;
