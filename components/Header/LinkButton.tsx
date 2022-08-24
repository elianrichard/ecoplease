import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string | string[][];
  link: string;
  setNavbar: Dispatch<SetStateAction<Boolean>>;
}

const LinkButton = ({ text, link, setNavbar }: Props) => {
  const router = useRouter();

  return (
    <li className="flex h-full flex-col items-center justify-center">
      <Link href={link}>
        <a
          className={`transition-all duration-200 ease-out hover:text-paleGreen ${
            router.pathname === link ? "text-paleGreen" : "text-white"
          }`}
          onClick={() => setNavbar(false)}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default LinkButton;
