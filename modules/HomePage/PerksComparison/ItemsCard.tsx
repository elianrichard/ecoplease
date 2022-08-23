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
      <div className="flex items-center justify-center mb-6 aspect-square rounded-xl">
        {children}
      </div>
      <p className="font-bold text-2xl mb-2">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ItemsCard;
