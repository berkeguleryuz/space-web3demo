import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import React from "react";
import DataProvider from "./DataProvider";
import DataText from "./DataText";

type Props = {};

const Middle = (props: Props) => {
  return (
    <section
      style={{ transform: "scale(0.9)" }}
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  pb-80 py-20">
      <DataText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <DataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <DataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <DataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Middle;
