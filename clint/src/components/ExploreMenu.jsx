import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="mx-auto md:mx-12 my-10 flex flex-col gap-8 justify-center ">
      <h1 className="text-center text-xl font-semibold">Explore our menu</h1>
      <div className=" flex justify-around min-w-[340px] overflow-x-auto">
        {menu_list.map((item, i) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer gap-4 
            min-w-[50vw]  md:min-w-[150px]"
            key={i}
          >
            <img src={item.menu_image} alt="menu_image" />
            <p className="text-xl text-slate-800">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
