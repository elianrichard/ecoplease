import React from "react";

import AtomSVG from "../../../asset/svgs/atom";
import ItemsCard from "./ItemsCard";

const Perks = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-14 ">
      <div className="text-4xl font-bold text-white px-7 py-2 rounded-xl bg-ecoRed shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)]">
        COMPARISON
      </div>
      <div className="flex justify-between gap-20 w-full">
        <ItemsCard
          title="Chemical Free"
          description="The product can be added to composting facility"
        >
          <AtomSVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="Chemical Free"
          description="The product can be added to composting facility"
        >
          <AtomSVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="Chemical Free"
          description="The product can be added to composting facility"
        >
          <AtomSVG style={{ fill: "#fff"}} />
        </ItemsCard>
        <ItemsCard
          title="Chemical Free"
          description="The product can be added to composting facility"
        >
          <AtomSVG style={{ fill: "#fff"}} />
        </ItemsCard>
      </div>
    </div>
  );
};

export default Perks;
