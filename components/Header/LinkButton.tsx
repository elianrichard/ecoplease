import React from "react";
import Link from "next/link";

interface Props {
  text: string | string[][];
  link: string;
}

const LinkButton = ({ text, link }: Props) => {
  return (
    <li className="flex h-full flex-col items-center justify-center">
      <Link href={link}>
        <a className="transition-all duration-200 ease-out hover:text-paleGreen">
          {text}
        </a>
      </Link>
    </li>
  );
};

export default LinkButton;
