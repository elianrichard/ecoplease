import React, { PropsWithChildren } from "react";

import paperTextureImg from "../../asset/pictures/paper-texture-2.jpg";

const JoinedContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen mb-1 py-20 bg-skinCream flex flex-col items-center gap-20" style={{
        backgroundImage: `url("${paperTextureImg.src}")`,
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundBlendMode: "multiply",
      }}>
      {children}
    </div>
  );
};

export default JoinedContent;
