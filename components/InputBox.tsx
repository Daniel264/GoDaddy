import React from "react";
import inc from "../assets/inc.webp";
import Image from "next/image";

const InputBox = () => {
  return (
    <>
      <div className="flex flex-row">
        <input type="text" className="max-w-[100px]:" />
        <button className="btn btn-primary ml-2">search Domain</button>
      </div>
      <div>
        <p className="font-semibold text-[#888]">.online $0.99*</p>
        <p className="font-bold text-[#888]">.net $14.99*</p>
        <p>
          <Image src={inc} alt="inc logo" /> $999.99*
        </p>
        <p className="font-semibold text-[#888]">.online $11.99*</p>
      </div>
    </>
  );
};

export default InputBox;
