import React from "react";
import moon from "../assets/moon.png";
import Image from "next/image";

const Help = () => {
  return (
    <div className=" text-center lg:text-left pt-44">
      <div className="bg-[#fffada] h-fit sm:flex sm:h-fit sm:py-10 md:items-center">
        <div className="px-10">
          <Image
            src={moon}
            alt="image of moon"
            className="h-[300px] md:w-[800px] md:h-[500px]"
          />
        </div>
        <div className="px-10 lg:pr-32">
          <h2 className="font-semibold text-3xl md:text-5xl md:pb-7">
            Why go with GoDaddy?
          </h2>
          <div className="lg:w-[500px]">
            <p className="pb-5 ">
              Because we know that even the best technology is only as good as
              the people behind it. That’s why we offer expert support, plus a
              lot more.
            </p>
          </div>
          <button className="btn bg-white text-black border-black mb-7">
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
