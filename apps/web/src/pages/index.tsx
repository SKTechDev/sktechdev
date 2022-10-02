import { Layout } from "../helper/layout";
import type { ReactElement } from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] justify-between content-start gap-9">
      <div>
        <div>
          <h1 className="text-9xl font-sora">
            <span>SK</span>
            <span className="text-techdev-gradient-radial">TechDev</span>
          </h1>
        </div>
        <div>
          <h2 className="text-5xl font-sora leading-[3.55rem] w-[60%]">
            Technology <br /> meets entertainment.
          </h2>
          <div className="flex space-x-2">
            <button className="bg-light-primary text-light-on-primary py-2 px-6 rounded-full dark:bg-dark-primary dark:text-dark-on-primary cursor-pointer">
              <span className=" text-sm font-sora">Join Us</span>
            </button>
            <button className="text-light-primary dark:text-dark-primary py-2 px-6 rounded-full cursor-pointer border border-light-outline dark:border-dark-outline">
              <span className="text-sm font-sora">Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Image
          src="/landing graphic.svg"
          alt="Landing Graphic"
          className="drop-shadow-[0px_0px_20px_rgba(233,132,98,0.5)] shadow-pulse"
          width={1184}
          height={400}
        />
      </div>

      <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
        <Image
          src="/backdrop.svg"
          layout="fill"
          alt="Backdrop"
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
      {/* Backdrop image that cover the screen */}
      <Layout>{page}</Layout>
    </>
  );
};

