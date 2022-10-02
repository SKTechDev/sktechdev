// import Techdevlogo from "../assets/techdev logo.svg";

import { ReactElement } from "react";
import Link from "next/link";

interface NavbarProps {
  title: string;
  icon: {
    active: ReactElement;
    inactive: ReactElement;
  };
}

export const Navbar = ({
  navItems,
  curPath,
}: {
  navItems: NavbarProps[];
  curPath: string;
}) => {
  // console.log(curPath);

  return (
    <div className="flex flex-col space-y-4 h-screen w-20 py-14 fixed bg-light-surface1 dark:bg-dark-surface1 bg-opacity-50 text-light-on-surface dark:text-dark-on-surface">
      <Link href="/">
        <a>
          <div className="flex flex-col">
            <img
              src="/logo.svg"
              alt="TechDev Logo"
              className={`${
                curPath === "/"
                  ? "drop-shadow-[0px_0px_20px_rgba(233,132,98,0.5)]"
                  : ""
              } mx-auto`}
            />
            <span className="text-center">TechDev</span>
          </div>
        </a>
      </Link>
      {navItems.map((item, index) => {
        return (
          <Link key={index} href={`/${item.title.toLocaleLowerCase()}`}>
            <a>
              <div className="flex flex-col items-center">
                {curPath.startsWith(item.title.toLowerCase())
                  ? item.icon.active
                  : item.icon.inactive}
                <span>{item.title}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
