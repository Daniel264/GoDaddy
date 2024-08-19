"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarouseProps {
  images: string[];
}

const Carousel = ({ images }: CarouseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;
  const animationWidth = totalImages * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="flex animate-slide-infinite"
        style={{ width: `${animationWidth}%` }}
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="min-w-fit px-5">
            <Image
              src={image}
              alt=""
              className=" w-full h-[500px] rounded-badge object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;

// "flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
