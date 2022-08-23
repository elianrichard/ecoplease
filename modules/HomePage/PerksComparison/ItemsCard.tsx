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
    <div className="flex flex-col justify-center items-center flex-1 text-white text-center">
      <div className="flex items-center justify-center mb-6 fill-white w-32 xs:w-full">
        {children}
      </div>
      <p className="font-bold text-lg xs:text-2xl mb-2">{title}</p>
      <p className="text-sm xs:text-base">{description}</p>
    </div>
  );
};

export default ItemsCard;
