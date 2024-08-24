"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface CarouseProps {
  images: StaticImageData[];
}

const Carousel = ({ images }: CarouseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalImages = images.length;
  const animationWidth = totalImages * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  // const handleClick = (index: number) => {
  //   setActiveIndex(index === activeIndex ? null : index); // Toggle button div visibility
  // };

  return (
    <>
      <div
        className="relative flex animate-slide-infinite"
        style={{ width: `${animationWidth}%` }}
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="min-w-fit px-5 relative">
            <Image
              src={image}
              alt=""
              className=" w-full h-[500px] rounded-badge object-cover  "
            />
            <div className=" justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[297px] h-[537px] flex flex-col opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
              <button className="btn  bg-white text-black w-40 h-12">
                Start Editing
              </button>
              <button className=" text-white font-semibold">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;

// "flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
