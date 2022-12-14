// import Techdevlogo from "../assets/techdev logo.svg";

import { ReactNode } from "react";
import Link from "next/link";

interface NavbarProps {
  title: string;
  icon: {
    active: ReactNode;
    inactive: ReactNode;
  };
}

export const Navbar = ({
  navItems,
  curPath,
}: {
  navItems: NavbarProps[];
  curPath: string;
}) => {
  // TODO: Add check for mobile to treat navbar as a drawer

  return (
    <div
      className={`flex flex-col space-y-4 h-screen top-0 w-20 py-12 fixed font-medium text-xs leading-4 tracking-wider bg-light-surface1 dark:bg-dark-surface1 ${
        curPath === "/" ? "bg-opacity-50" : ""
      } text-light-on-surface dark:text-dark-on-surface`}
    >
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
              <div className={`flex flex-col items-center `}>
                <div
                  className={`flex flex-col justify-center py-1 px-4 ${
                    curPath.startsWith(`/${item.title.toLocaleLowerCase()}`)
                      ? "rounded-full bg-light-primary-container text-light-on-primary-container dark:bg-dark-primary-container dark:text-dark-on-primary-container"
                      : ""
                  } transition-all duration-300`}
                >
                  <>
                    {curPath.startsWith(`/${item.title.toLocaleLowerCase()}`)
                      ? item.icon.active
                      : item.icon.inactive}
                  </>
                </div>
                <span>{item.title}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
