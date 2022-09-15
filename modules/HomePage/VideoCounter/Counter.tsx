import { animate, useInView } from "framer-motion";
import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";

const Counter = () => {
  const counterRefDiv = useRef() as MutableRefObject<HTMLDivElement>;
  const counterRefNodes = useRef<HTMLParagraphElement[]>([]);
  const counterPlaceholder = useMemo(() => {
    return [
      { value: 100, text: "Hello World", prefix: "" },
      { value: 50, text: "Hello World", prefix: "K" },
      { value: 6, text: "Hello World", prefix: "" },
      { value: 40, text: "Hello World", prefix: "" },
      { value: 5, text: "Hello World", prefix: "" },
      { value: 10, text: "Hello World", prefix: "++" },
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
      className="grid h-full w-full grid-cols-2 gap-x-10 gap-y-10 text-5xl font-black text-darkRed xs:grid-cols-3 sm:text-6xl lg:h-1/2 lg:gap-y-0"
      ref={counterRefDiv}
    >
      {counterPlaceholder.map((el, i) => (
        <div
          className="flex h-full w-full flex-col items-center justify-center"
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
          >
            0{el.prefix}
          </p>
          <p className="text-2xl sm:text-3x text-center">{el.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
