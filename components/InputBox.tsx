import React from "react";
import inc from "../assets/inc.webp";
import Image from "next/image";

const InputBox = () => {
  return (
    <div className="flex p-10">
      <div className="flex flex-row pr-5">
        <input
          type="text"
          placeholder="Type the domain you want"
          className="w-[850px] bg-[#dfdfdf] outline-none placeholder:text-brown px-5"
        />
        <button className=" btn bg-[#00838C] h-[67px] rounded-none text-white">
          search Domain
        </button>
      </div>
      <div className="flex pt-5">
        <p className="font-semibold text-sm text-[#888] pr-3">.online $0.99*</p>
        <p className="font-bold text-sm text-[#888] pr-3">.net $9.99</p>
        <p className="text-sm text-[#888] flex pr-3">
          <Image className="w-7 h-7" src={inc} alt="inc logo" /> $999.99*
        </p>
        <p className="font-semibold text-sm text-[#888]">.online $11.99*</p>
      </div>
    </div>
  );
};

export default InputBox;
