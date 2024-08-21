import React from "react";
import Text from "./TestimonialText";

const Testimonials = () => {
  return (
    <div className="px-10 pt-20">
      <div className="">
        <div>
          <h1 className="font-semibold text-center md:text-left text-3xl lg:text-5xl">
            Trusted by 20+ million customers around the world{" "}
          </h1>
        </div>
        <div className="carousel carousel-center rounded-box max-w-md space-x-4 p-4">
          {Text.map((item) => (
            <div key={item.id} className="carousel-item max-w-xs">
              <div className="p-4 bg-white rounded-box shadow-md">
                <div className="rating mb-10">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
                <p className="text-lg text-black  mb-2">{item.text}</p>
                <p className="mt-10">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
