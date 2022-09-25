import React from "react";
import { IconContext } from "react-icons";
import { ImFire } from "react-icons/im";
import { GiPlantRoots, GiTreeBranch, GiHeartBottle } from "react-icons/gi";

import ItemsCard from "./ItemsCard";

const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 ">
      <div className="rounded-xl bg-ecoRed px-7 py-2 text-2xl font-bold text-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.4)] xs:text-4xl sm:text-3xl">
        CHARACTERISTIC
      </div>
      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-10 xs:gap-10 lg:grid-cols-4 xl:gap-20">
        <IconContext.Provider value={{ color: "#fff", className: "h-28" }}>
          <ItemsCard title="0% Plastic usage" description="???">
            <GiHeartBottle className="w-[70px]" />
          </ItemsCard>
          <ItemsCard title="100% Natural Material" description="???">
            <GiTreeBranch className="w-[70px]" />
          </ItemsCard>
          <ItemsCard title="Degradable within 90 days" description="???">
            <GiPlantRoots className="w-[70px]" />
          </ItemsCard>
          <ItemsCard title="100% Combustible, Chemical-Free" description="???">
            <ImFire className="w-[70px]" />
          </ItemsCard>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Perks;
