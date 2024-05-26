import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Store } from "../context/store";

const Navbar = ({ showLogin, setShowLogin }) => {
  console.log(showLogin);
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  const [active, setActive] = useState("home");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { itemsCount } = useContext(Store);
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close the menu when clicking outside of it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuClicked(false);
      }
    };

    // Adding event listener for clicks outside of the menu
    if (isMenuClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuClicked]);

  const handleMenu = () => {
    if (isMobile) {
      setIsMenuClicked(!isMenuClicked);
    }
  };

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
          alt=""
        />

        <ul
          ref={menuRef}
          className={`items-center ${
            !isMenuClicked
              ? "hidden "
              : "bg-gray-100 items-center  z-10 h-[25vh] w-[40vw] absolute right-14 top-8 rounded-lg flex flex-col "
          } space-x-3 sm:flex justify-center gap-4`}
        >
          <Link to="/">
            <li
              className={`cursor-pointer ml-3 ${
                active === "home" && "text-blue-400"
              }`}
              onClick={() => {
                setActive("home");
                handleMenu();
              }}
            >
              home
            </li>
          </Link>
          <li
            className={`cursor-pointer ${active === "menu" && "text-blue-400"}`}
            onClick={() => {
              setActive("menu");
              handleMenu();
            }}
          >
            menu
          </li>
          <li
            className={`cursor-pointer ${
              active === "mobile-app" && "text-blue-400"
            }`}
            onClick={() => {
              setActive("mobile-app");
              handleMenu();
            }}
          >
            mobile-app
          </li>
          <li
            className={`cursor-pointer ${
              active === "contact us" && "text-blue-400"
            }`}
            onClick={() => {
              setActive("contact us");
              handleMenu();
            }}
          >
            contact us
          </li>
          {isMobile && (
            <li className="cursor-pointer" onClick={handleMenu}>
              <button
                className="px-2 py-1 border-[1px] border-orange-700 rounded-lg hover:bg-gray-100"
                onClick={() => setShowLogin((prev) => !prev)}
              >
                Sign up
              </button>
            </li>
          )}
        </ul>
        <div className="items-center flex-shrink-0 flex sm:flex gap-4">
          <div className="flex bg-gray-200 rounded-md items-center py-1">
            <input
              type="text"
              className="outline-none pl-2 bg-inherit w-20 md:ml-1 md:w-40"
            />

            <img
              src={assets.search_icon}
              alt=""
              className="w-3 ml-2 h-3 mr-2 cursor-pointer"
            />
          </div>
          <div className="relative w-8">
            <img src={assets.basket_icon} alt="" />
            <p className="absolute top-[-10px] right-[-8px] bg-black text-white w-6 h-6 text-center rounded-full">
              {itemsCount}
            </p>
          </div>
          {/* Render sign-up button outside the menu list if it's not a mobile screen */}
          {!isMobile && (
            <button
              className="px-2 py-1 border-[1px] border-orange-700 rounded-lg hover:bg-gray-100"
              onClick={() => setShowLogin((prev) => !prev)}
            >
              Sign up
            </button>
          )}
        </div>
        <button className="p-4 sm:hidden" onClick={handleMenu}>
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
