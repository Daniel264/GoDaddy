"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarouseProps {
  images: string[];
}

const Carousel = ({ images }: CarouseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image src={image} alt="" className="w-full h-auto px-5" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;


