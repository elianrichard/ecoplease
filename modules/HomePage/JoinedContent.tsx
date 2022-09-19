import React, { PropsWithChildren } from "react";

import paperTextureImg from "../../asset/pictures/paper-texture-2.webp";

const JoinedContent = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="mb-1 flex w-screen flex-col items-center gap-20 bg-skinCream/80 py-20"
      style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundBlendMode: "multiply",
      }}
    >
      {children}
    </div>
  );
};

export default JoinedContent;
