import React from "react";

import DeliverySVG from "../../../asset/svgs/icons/DeliveryIcon";
import ItemsCard from "./ItemsCard";

const Perks = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-14">
      <div className="text-4xl font-bold text-white px-7 py-2 rounded-xl bg-ecoRed shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)]">
        OUR PERKS
      </div>
      <div className="flex justify-between gap-20 w-full">
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="FREE DELIVERY"
          description="The product can be added to composting facility"
        >
          <DeliverySVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="24/7 SERVICE"
          description="The product can be added to composting facility"
        >
          <DeliverySVG style={{ fill: "#fff"}} />
        </ItemsCard>
      </div>
    </div>
  );
};

export default Perks;
