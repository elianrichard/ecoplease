import React from "react";

const Description = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full items-center gap-20">
        <div className="relative flex flex-1 justify-end">
          <div className="absolute -bottom-8 right-20 h-96 w-80 bg-darkRed" />
          <div className="z-0 h-72 w-72 bg-black " />
        </div>
        <div className="flex-[2] text-ecoRed">
          <div className="w-2/3">
            <p className="mb-2 text-3xl font-bold">
              Why do we choose bamboo fiber?
            </p>
            <p className="text-xl ">
              Bamboo is seen as the finest material to create Eco-friendly
              products as it is sustainable, has a rapid growth which can avoid
              deforestation.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex w-full flex-row-reverse items-start gap-20">
        <div className="relative flex flex-1 flex-row-reverse justify-end">
          <div className="absolute -top-32 left-32 h-96 w-60 bg-darkRed" />
          <div className="z-0 h-72 w-80 bg-black " />
        </div>
        <div className="flex flex-[2] justify-end text-ecoRed">
          <div className="w-2/3 text-right">
            <p className="text-xl">
              It is 100% home compostable, stronger than steel, antibacterial,
              and antifungal. Our technique to create Bamboo Fiber is the most
              natural way and doesn&apos;t harm the environment.
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-20 flex w-full items-end gap-20">
        <div className="relative flex flex-1 justify-end">
          <div className="absolute -bottom-8 right-20 h-60 w-80 bg-darkRed" />
          <div className="z-0 h-80 w-60 bg-black " />
        </div>
        <div className="flex-[2] text-ecoRed">
          <div className="w-2/3">
            <p className="text-xl ">
              First we collect the bamboo and grind them into powder then the
              powder is processed into natural bamboo fiber.
              <br />
              <br />
              The process does not create water pollution as it is natural and
              the processing temperature is strictly controlled under 200°C to
              effectively ensure low carbon emission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
