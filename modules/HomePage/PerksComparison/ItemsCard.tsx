import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  description: string;
}

const ItemsCard = ({
  title,
  description,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start text-center text-white">
      <div className="mb-6 flex w-32 items-center justify-center fill-white xs:w-full">
        {children}
      </div>
      <p className="mb-2 text-lg font-bold uppercase xs:text-2xl">{title}</p>
      <p className="text-sm xs:text-base">{description}</p>
    </div>
  );
};

export default ItemsCard;
