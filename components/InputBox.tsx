import React from "react";
import inc from "../assets/inc.webp";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const InputBox = () => {
  return (
    <div className="flex flex-col xl:flex-row p-10">
      <div className="flex flex-row pr-5" data-aos="fade-right">
        <input
          type="text"
          placeholder="Type the domain you want"
          className="w-full md:w-[850px] bg-[#dfdfdf] outline-none placeholder:text-brown px-5"
        />
        <button className=" btn bg-[#00838C] h-[67px] w-2/12 md:w-max rounded-none text-white ">
          <FaSearch className="block md:flex "/>
          <span className="hidden md:block">search Domain</span>
        </button>
      </div>
      <div className="flex pt-5" data-aos="zoom-in-left">
        <p className="font-semibold text-sm text-[#888] pr-3">.online $0.99*</p>
        <p className="font-bold text-sm text-[#888] pr-3">.net $9.99</p>
        <p className="text-sm text-[#888] md:flex pr-3">
          <Image className="w-7 h-7" src={inc} alt="inc logo" /> $999.99*
        </p>
        <p className="font-semibold text-sm text-[#888]">.online $11.99*</p>
      </div>
    </div>
  );
};

export default InputBox;
