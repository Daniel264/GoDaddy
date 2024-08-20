import React from "react";
import moon from "../assets/moon.png";
import Image from "next/image";

const Help = () => {
  return (
    <div className="px-10 text-center">
      <div className="bg-[#fffada] h-[550px]">
        <div className="px-10">
          <Image src={moon} alt="image of moon" className="h-[300px]" />
        </div>
        <div className="px-2">
          <h2 className="font-semibold text-3xl">Why go with GoDaddy?</h2>
          <p className="pb-5">
            Because we know that even the best technology is only as good as the
            people behind it. That’s why we offer expert support, plus a lot
            more.
          </p>
          <button className="btn bg-white text-black border-black">
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
