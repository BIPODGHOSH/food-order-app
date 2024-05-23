import React, { useState } from "react";
import { assets } from "../assets/assets";
import FoodItemSkeleton from "./FoodItemSkeleton";

const FoodItem = ({ food }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div className="w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/3 my-2 pb-3">
      <div className="mx-2 md:mx-3 lg:mx-4 hover:border-[1px] p-2 hover:shadow-lg rounded-md pb-4 flex flex-col gap-4">
        {imageLoading && <FoodItemSkeleton />}
        <img
          src={food.image}
          alt=""
          className={`w-full rounded-md translate-x-1 ${
            imageLoading ? "hidden" : ""
          }`}
          onLoad={handleImageLoaded}
        />
        {!imageLoading && (
          <div className="">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{food.name}</h2>
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="text-gray-500 text-sm">{food.description}</p>
            <p className="text-lg text-red-500">₹ {food.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
