import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
          alt=""
        />
        <ul className="items-center hidden space-x-3 sm:flex justify-center gap-4">
          <Link to="/">
            <li
              className={`cursor-pointer ${
                active === "home" && "text-blue-400"
              }`}
              onClick={() => setActive("home")}
            >
              home
            </li>
          </Link>
          <li
            className={`cursor-pointer ${active === "menu" && "text-blue-400"}`}
            onClick={() => setActive("menu")}
          >
            menu
          </li>
          <li
            className={`cursor-pointer ${
              active === "mobile-app" && "text-blue-400"
            }`}
            onClick={() => setActive("mobile-app")}
          >
            mobile-app
          </li>
          <li
            className={`cursor-pointer ${
              active === "contact us" && "text-blue-400"
            }`}
            onClick={() => setActive("contact us")}
          >
            contact us
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden sm:flex gap-4">
          <div className="flex bg-gray-200 rounded-md items-center py-1">
            <input
              type="text"
              className=" outline-none pl-2 bg-inherit w-20 md:ml-1 md:w-40"
            />
            <img
              src={assets.search_icon}
              alt=""
              className="w-3 ml-2 h-3 mr-2 cursor-pointer"
            />
          </div>
          <img src={assets.basket_icon} alt="" />
          <button className="px-2 py-1 border-[1px] border-orange-700 rounded-lg hover:bg-gray-100 ">
            Sign up
          </button>
        </div>
        <button className="p-4 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
