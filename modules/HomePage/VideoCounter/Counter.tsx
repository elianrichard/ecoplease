import { animate, useInView } from "framer-motion";
import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";

const Counter = () => {
  const counterRefDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const counterRefNodes = useRef<HTMLParagraphElement[]>([]);
  const counterPlaceholder = useMemo(() => {
    return [
      { value: 100, text: "Plastic Food Packaging Replaced", prefix: "" },
      { value: 50, text: "Plastic Straw Replaced", prefix: "K" },
      { value: 6, text: "Plastic Cutleries Replaced", prefix: "" },
      { value: 40, text: "Plastic Cup & Lid Replaced", prefix: "" },
      { value: 5, text: "Eco-awareness Impacted", prefix: "" },
    ];
  }, []);

  const isCounterInView = useInView(counterRefDiv, {
    amount: "all",
    once: true,
  });

  useEffect(() => {
    if (isCounterInView) {
      const controlsNodes = counterPlaceholder.map((el, i) => {
        return animate(0, el.value, {
          duration: 1,
          onUpdate(value) {
            counterRefNodes.current[i].textContent = `${value.toFixed(0)}${
              el.prefix
            }`;
          },
        });
      });

      return () => {
        controlsNodes.map((el) => el.stop());
      };
    }
  }, [counterPlaceholder, isCounterInView]);

  return (
    <div
      className="grid h-full w-full grid-cols-2 items-start justify-center gap-10 font-black text-darkRed sm:flex sm:flex-col lg:h-1/2"
      ref={counterRefDiv}
    >
      {counterPlaceholder.map((el, i) => (
        <div
          className={`flex h-full w-full flex-col gap-5 sm:grid sm:grid-cols-[1fr,3fr] ${
            counterPlaceholder.length % 2 !== 0 &&
            counterPlaceholder.length - 1 === i
              ? "col-span-2"
              : ""
          }`}
          key={i}
        >
          <p
            ref={(element) =>
              counterRefNodes.current.splice(
                i,
                1,
                element as HTMLParagraphElement
              )
            }
            className="flex items-center justify-center text-5xl"
          >
            0{el.prefix}
          </p>
          <p className="flex items-center justify-center text-center uppercase xs:text-lg sm:text-xl">
            {el.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
