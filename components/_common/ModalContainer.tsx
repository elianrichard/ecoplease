import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import CrossIcon from "../../asset/svgs/icons/CrossIcon";

interface Props {
  additionalClass?: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const ModalContainer = ({
  children,
  additionalClass,
  setModal,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`modal-close fixed w-screen h-screen top-0 left-0 overflow-hidden bg-black/70 z-[100] ${additionalClass}`}
      onClick={(e) => {
        const { target } = e;
        if ((target as HTMLDivElement).classList.contains("modal-close"))
          setModal(false);
      }}
    >
      {children}
      <div className="w-10 aspect-square absolute top-10 right-10 modal-close">
        <CrossIcon className="fill-white hover:fill-ecoRed cursor-pointer modal-close" />
      </div>
    </div>
  );
};

export default ModalContainer;
