import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Sign Up");

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center z-50 absolute w-full h-full bg-[#00000090]">
      <form
        className=" min-w-52 w-80 bg-white min-h-36 h-2/3 flex flex-col items-center p-6 justify-between rounded-lg "
        onSubmit={handelSubmit}
      >
        <div className="flex justify-between w-full px-5">
          <h1 className=" text-xl font-bold">{curState}</h1>
          <img
            src={assets.cross_icon}
            alt=""
            className="w-4 h-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className=" flex flex-col items-center gap-2 mt-5 ">
          {curState === "Sign Up" && (
            <input
              type="text"
              placeholder="Enter Name"
              required
              className="outline-none rounded-md px-3 py-1 border border-zinc-400"
            />
          )}
          <input
            type="email"
            placeholder="Enter Email"
            required
            className="outline-none rounded-md px-3 py-1 border border-zinc-400"
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="outline-none rounded-md px-3 py-1 border border-zinc-400"
          />
          <button
            type="submit"
            className="px-4 py-2 w-full bg-red-500 text-white font-semibold rounded-md"
          >
            {curState}
          </button>
        </div>

        <div className=" text-xs ">
          <input type="checkbox" required />
          <p className="">By continue, i agree to the terms & privacy policy</p>

          {curState === "Sign Up" ? (
            <p className="">
              Already have an account?{" "}
              <span
                className=" text-red-500 text-sm cursor-pointer font-semibold"
                onClick={() => setCurState("Login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{" "}
              <span
                className=" text-red-500 text-sm cursor-pointer font-semibold"
                onClick={() => setCurState("Sign Up")}
              >
                Create new account
              </span>{" "}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
