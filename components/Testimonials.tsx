import React from "react";
import Text from "./TestimonialText";

const Testimonials = () => {
  return (
    <div className=" pt-20 px-10">
      <div>
        <div className="">
          <h1 className="font-semibold text-left md:text-left text-3xl lg:text-5xl">
            Trusted by 20+ million <br /> customers around the world
          </h1>
        </div>
        <div className="carousel carousel-center rounded-box max-w-xs space-x-4 sm:max-w-none py-4 md:w-full">
          {Text.map((item) => (
            <div key={item.id} className="carousel-item max-w-[18rem] md:max-w-[490px]">
              <div className="p-4 bg-gray-100 rounded-box shadow-md">
                <p className="mb-5 text-black font-semibold">{item.header}</p>
                <div className="rating mb-10">
                  <div className="bg-green-500 mr-1 px-1">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white w-3 h-3"
                    />
                  </div>
                  <div className="bg-green-500 mr-1 px-1">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white w-3 h-3"
                    />
                  </div>
                  <div className="bg-green-500 mr-1 px-1">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white w-3 h-3"
                    />
                  </div>
                  <div className="bg-green-500 mr-1 px-1">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 w-3 h-3 bg-white"
                    />
                  </div>
                  <div className="bg-green-500 mr-1 px-1">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white w-3 h-3"
                    />
                  </div>
                </div>

                <p className="text-base md:text-lg text-black font-medium  mb-2">
                  {item.text}
                </p>
                <p className=" mt-10">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
