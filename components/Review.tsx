import React from "react";

const Review = () => {
  return (
    <div className="p-10">
      <p className="font-medium text-xl">
        Trustpilot
      </p>
      <div className="rating my-3">
        <div className="bg-green-500 mr-1 px-1 m-auto pt-1">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-white w-4 h-4"
          />
        </div>
        <div className="bg-green-500 mr-1 px-1 m-auto pt-1">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-white w-4 h-4"
          />
        </div>
        <div className="bg-green-500 mr-1 px-1 m-auto pt-1">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-white w-4 h-4"
          />
        </div>
        <div className="bg-green-500 mr-1 px-1 m-auto pt-1">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-white w-4 h-4"
          />
        </div>
        <div className="bg-gray-300 mr-1 px-1 m-auto pt-1">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-white w-4 h-4"
          />
        </div>
      </div>
      <p>
        Based on <span className="font-medium">19,697</span> Reviews
      </p>

      <p>Showing our 4 and 5 star reviews</p>
    </div>
  );
};

export default Review;
