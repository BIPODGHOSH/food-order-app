import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div
      className="h-[35vw] mx-5 md:mx-12 bg-center rounded-2xl  bg-no-repeat "
      style={{
        background: `url(${assets.header_img}) no-repeat`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-30 rounded-2xl"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <div className=" w-full h-full text-white absolute  flex flex-col gap-2 md:gap-4 justify-center items-center px-2">
        <h1 className="text-2xl md:text-6xl font-bold md:font-extrabold ">
          zomato
        </h1>
        <h3 className=" text-sm md:text-2xl md:font-semibold">
          Discover the best food & drinks in Nabadwip
        </h3>
        <button className=" border-[1px] px-4 py-1 rounded-md shadow-lg font-semibold text-black bg-white">
          view more
        </button>
      </div>
    </div>
  );
};

export default Header;
