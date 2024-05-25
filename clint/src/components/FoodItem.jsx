import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import FoodItemSkeleton from "./FoodItemSkeleton";
import { Store } from "../context/store";

const FoodItem = ({ food }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const { cartItems, addToCart, removeFromCart } = useContext(Store);

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div className="w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/3 my-2 pb-3">
      <div className="mx-2 md:mx-3 lg:mx-4 hover:border-[1px] p-2 hover:shadow-lg rounded-md pb-4 flex flex-col gap-4">
        {imageLoading && <FoodItemSkeleton />}
        <div className=" relative ">
          <img
            src={food.image}
            alt=""
            className={`w-full rounded-md translate-x-1 ${
              imageLoading ? "hidden" : ""
            }`}
            onLoad={handleImageLoaded}
          />

          {!cartItems[food._id] ? (
            <img
              src={assets.add_icon_white}
              alt=""
              className=" absolute bottom-6 right-6 size-8 cursor-pointer"
              onClick={() => addToCart(food._id)}
            />
          ) : (
            <div className="flex justify-between absolute bottom-6 right-2 sm:right-2 size-8 bg-white w-24  rounded-full">
              <img
                src={assets.add_icon_green}
                alt=""
                className="cursor-pointer"
                onClick={() => addToCart(food._id)}
              />
              <p className="font-semibold text-lg">{cartItems[food._id]}</p>
              <img
                src={assets.remove_icon_red}
                alt=""
                className="cursor-pointer"
                onClick={() => removeFromCart(food._id)}
              />
            </div>
          )}
        </div>
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
