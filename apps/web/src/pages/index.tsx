import { Layout } from "../helper/layout";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] justify-between content-start gap-9">
      <div>
        <div>
          <h1 className="text-[10rem] font-sora -tracking-[11.75px] break-normal">
            <span>SK </span>

            <span className="text-techdev-gradient-radial font-bold">
              Tech Dev
            </span>
          </h1>
        </div>
        <div>
          <h2 className="text-5xl font-sora leading-[3.55rem] w-[60%]">
            Technology <br /> meets entertainment.
          </h2>
          <div className="flex space-x-2 mt-6">
            <Link href={"/contact"}>
              <a>
                <button className="bg-light-primary text-light-on-primary py-2 px-6 rounded-full dark:bg-dark-primary dark:text-dark-on-primary cursor-pointer hover:opacity-80 transition-all duration-300">
                  <span className=" text-sm font-sora">Join us</span>
                </button>
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
                <button className="text-light-primary dark:text-dark-primary py-2 px-6 rounded-full cursor-pointer border border-light-outline dark:border-dark-outline hover:opacity-80 transition-all duration-300">
                  <span className="text-sm font-sora">Learn more</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Image
          src="/landing graphic.svg"
          alt="TechDev Logo with videogame controller and computer chip on its side"
          className="drop-shadow-[0px_0px_20px_rgba(233,132,98,0.5)] shadow-pulse"
          width={1184}
          height={400}
        />
      </div>

      {/* Backdrop image that cover the screen */}
      <div className="absolute top-0 left-0 w-screen h-screen z-[-1] opacity-50">
        <Image
          src="/backdrop.svg"
          layout="fill"
          alt="A City Backdrop"
          objectFit="cover"
          objectPosition="center"
          // width={width}
          // height={height}
        />
      </div>
    </div>
  );
}

Landing.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
