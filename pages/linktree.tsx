import React from "react";
import LogoLight from "../asset/svgs/logo/LogoLight";

const linktree = () => {
  const links = [
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
    ["Google", "https://google.com"],
  ];

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-darkRed py-20 px-10">
      <div className="w-32">
        <LogoLight className="fill-white" />
      </div>
      <ul className="flex w-full flex-col items-center justify-center gap-5 sm:w-[30rem]">
        {links.map((el, i) => (
          <li
            className="flex w-full items-center justify-center bg-darkRed text-white transition-all duration-200 ease-out hover:bg-white hover:text-darkRed "
            key={i}
          >
            <a
              href={el[1]}
              className="block w-full border-[1px] border-white py-3 text-center"
            >
              {el[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default linktree;
