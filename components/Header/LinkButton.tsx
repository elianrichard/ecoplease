import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string | string[][];
  link: string;
}

const LinkButton = ({ text, link }: Props) => {
  const router = useRouter();

  return (
    <li className="flex h-full flex-col items-center justify-center">
      <Link href={link}>
        <a
          className={`transition-all duration-200 ease-out hover:text-paleGreen ${
            router.pathname === link ? "text-paleGreen" : "text-white"
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default LinkButton;
