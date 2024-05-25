import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-700  text-white px-2 mt-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-10 py-5 h-full gap-10">
        <div className=" w-full md:w-1/3">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
            alt=""
            className=" w-30 h-20"
          />
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            totam labore enim autem vero eveniet culpa, ducimus, veritatis sed
            omnis asperiores placeat minus fugit est sunt.
          </p>
          <div className="flex my-4 justify-around">
            <img
              src={assets.facebook_icon}
              alt="facebook_icon"
              className=" cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt="twitter_icon"
              className=" cursor-pointer"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedin_icon"
              className=" cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-5 md:w-1/2 ">
          <div className="">
            <h1 className="text-3xl font-semibold cursor-pointer">COMPANY</h1>
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Privecy Pollcy</p>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">GET IN TOUCH</h1>
            <p className="">+918637064446</p>
            <p className="">bipodghosh0@gmil.com</p>
          </div>
        </div>
      </div>
      <hr className="h-1 py-[10px] mx-[50px]" />
      <p className=" mx-14 pb-5">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
