import { animate, useInView } from "framer-motion";
import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";

const Counter = () => {
  const counterRefDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const counterRefNodes = useRef<HTMLParagraphElement[]>([]);
  const counterPlaceholder = useMemo(() => {
    return [
      {
        value: 6.8,
        text: "Plastics Produced every year in indonesia",
        prefix: "M",
        fixedValue: 1,
      },
      {
        value: 620,
        text: "Plastic Wastes leaked into the sea, lake, and river",
        prefix: "K",
        fixedValue: 0,
      },
      {
        value: 47,
        text: "Plastics are burned every year",
        prefix: "%",
        fixedValue: 0,
      },
      {
        value: 10,
        text: "Plastic Wastes are recyled",
        prefix: "%",
        fixedValue: 0,
      },
      {
        value: 200,
        text: "Years Required to degrade a plastic",
        prefix: "",
        fixedValue: 0,
      },
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
            counterRefNodes.current[i].textContent = `${value.toFixed(
              el.fixedValue
            )}${el.prefix}`;
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
      className="grid h-full w-full grid-cols-2 items-center justify-center gap-y-10 gap-x-5 font-black text-darkRed sm:flex sm:flex-col lg:h-1/2"
      ref={counterRefDiv}
    >
      <div className="col-span-2 flex w-full justify-center bg-darkRed py-3 text-3xl font-bold text-white sm:text-4xl">
        DO YOU KNOW?
      </div>
      {counterPlaceholder.map((el, i) => (
        <div
          className={`flex h-full w-full flex-col gap-5 sm:grid sm:grid-cols-[1fr,3fr] 
          ${
            counterPlaceholder.length % 2 !== 0 &&
            counterPlaceholder.length - 1 === i
              ? "col-span-2"
              : ""
          }
          `}
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
            className="flex items-center justify-center text-4xl lg:text-5xl"
          >
            0{el.prefix}
          </p>
          <p className="flex items-center justify-center text-center text-sm uppercase sm:text-lg lg:text-xl">
            {el.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
