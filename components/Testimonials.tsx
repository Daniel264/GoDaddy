import React from "react";
import Text from "./TestimonialText";

const Testimonials = () => {
  return (
    <div className=" pt-20">
      <div>
        <div>
          <h1 className="font-semibold text-center md:text-left text-3xl lg:text-5xl">
            Trusted by 20+ million customers around the world{" "}
          </h1>
        </div>
        <div className="carousel carousel-center rounded-box max-w-md space-x-4 p-4">
          {Text.map((item) => (
            <div key={item.id} className="carousel-item max-w-xs">
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

                <p className="text-lg text-black font-semibold  mb-2">
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
