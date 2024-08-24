import Image from "next/image";
import React from "react";
import firstImg from "../assets/firstimg.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="grid grid-rows-2 gap-4 h-fit md:grid sm:grid-rows-2 md:grid-rows-1 md:grid-cols-1 lg:grid  lg:grid-cols-[63%_37%] lg:gap-3 lg:w-[100%] lg:h-[500px] px-10 " data-aos='zoom-in-up'>
        <div className=" relative" data-aos="fade-left">
          <div className="text-center sm:text-left absolute pl-6 lg:pl-8 pr-3 lg:pr-72 top-10">
            <p className="font-semibold pb-5">Websites & Commerce</p>
            <h1
              className="font-bold
            text-3xl lg:text-5xl pb-5"
            >
              Create your <br /> website
            </h1>
            <button className="btn bg-black text-white border-none hover:hover:bg-[#555]">
              Start for free
            </button>
            <p className="pt-7">
              No charge, no obligation, nothing to cancel.**
            </p>
          </div>

          <Image className="h-[100%] rounded-md " src={firstImg} alt={""} />
        </div>
        <div
          className=" bg-sky-50 rounded-md pl-14 pb-5 pt-16 pr-10 md:pr-32"
          data-aos="fade-right"
        >
          <p className="font-semibold pb-5">Domain Names</p>
          <h1 className="text-4xl font-medium pb-5">
            Grab a .com for just $0.01* /1st yr
          </h1>
          <p className="pb-3 font-semibold">2-year purchase required*</p>
          <button className="btn bg-black text-white hover:bg-[#555]">
            Find Your Domain
          </button>
          <p className="pt-5 font-semibold">Transfer Your Domains</p>
          <p className="pt-3">
            Domains include free privacy protection forever*
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
