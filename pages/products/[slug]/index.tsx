import { NextPage } from "next";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

const Product: NextPage = () => {
  const descDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const [descDivPos, setDescDivPos] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setDescDivPos(
        e.target.documentElement.scrollTop +
          e.target.documentElement.clientHeight -
          64
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [descDivPos]);

  return (
    <div className="flex w-screen gap-1" ref={descDiv}>
      <div className="w-1/2">
        <div className="mb-1 h-96 w-full bg-blue-800"></div>
        <div className="mb-1 h-96 w-full bg-blue-800"></div>
        <div className="mb-1 h-96 w-full bg-blue-800"></div>
        <div className="mb-1 h-96 w-full bg-blue-800"></div>
      </div>
      <div className="relative w-1/2">
        <div
          className={`${
            descDiv.current?.clientHeight > descDivPos
              ? "fixed"
              : "absolute bottom-0"
          } h-[calc(100vh-64px)] w-full bg-skinCream`}
        ></div>
      </div>
    </div>
  );
};

export default Product;
