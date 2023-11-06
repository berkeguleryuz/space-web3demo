import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCodeBold } from "react-icons/pi";

import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto mx-[10px]">
        <Link
          href={"#about"}
          className="h-auto w-auto flex flex-row items-center">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin duration-300"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Web3 Project
          </span>
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href={"#"} className="cursor-pointer">
              Home
            </Link>
            <Link href={"#about"} className="cursor-pointer">
              About
            </Link>
            <Link href={"#about"} className="cursor-pointer">
              News
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5 mr-20">
          <Link href="https://twitter.com/Omegayon" target="_blank">
            <RiTwitterXLine className="text-white" />
          </Link>
          <Link href="https://clodron.com/" target="_blank">
            <PiCodeBold className="text-white" />
          </Link>
          <Link href="https://github.com/berkeguleryuz" target="_blank">
            <RiGithubFill className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
