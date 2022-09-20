import React, { PropsWithChildren } from "react";
import Image from "next/image";

import paperTextureImg from "../../asset/pictures/paper-texture-2.webp";

const JoinedContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative mb-1 flex w-screen">
      <div className="absolute -z-10 h-full w-full bg-skinCream/80">
        <Image
          src={paperTextureImg}
          alt="ecoplease background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col items-center gap-20 py-20">{children}</div>
    </div>
  );
};

export default JoinedContent;
