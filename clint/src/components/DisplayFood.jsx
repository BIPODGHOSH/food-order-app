import React, { useContext } from "react";
import { Store } from "../context/store";
import FoodItem from "./FoodItem";
const DisplayFood = ({ category }) => {
  const { food_list } = useContext(Store);
  const filteredFoodList =
    category !== "All"
      ? food_list.filter((food) => food.category === category)
      : food_list;
  return (
    <div className="m-5">
      <h2 className=" text-center mb-2 mt-5 text-xl font-semibold">
        Top dishes near you
      </h2>
      <div className="flex flex-wrap mx-2 mg:mx-4 lg:mx-8 ">
        {filteredFoodList.map((food, i) => {
          return <FoodItem food={food} key={i} />;
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
