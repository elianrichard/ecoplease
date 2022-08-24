import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { IconContext } from "react-icons";
import { VscChromeClose } from "react-icons/vsc";

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
      className={`modal-close fixed top-0 left-0 z-[100] h-screen w-screen overflow-hidden bg-black/70 ${additionalClass}`}
      onClick={(e) => {
        const { target } = e;
        if ((target as HTMLDivElement).classList.contains("modal-close"))
          setModal(false);
      }}
    >
      {children}
      <div className="modal-close absolute top-10 right-10 aspect-square w-10">
        <IconContext.Provider
          value={{
            className:
              "modal-close w-full h-full fill-white hover:fill-ecoRed cursor-pointer transition-fill duration-200 ease-out",
          }}
        >
          <VscChromeClose />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ModalContainer;
