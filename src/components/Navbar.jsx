import React from "react";
import { useState } from "react";
import close from "../assets/close.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[70px] bg-[#251515]">
      <div className="md:max-w-[1000px] max-w-[400px] w-full h-full m-auto flex justify-between items-center ">
        <h1 className="font-serif text-white text-2xl">CAKERY</h1>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6 font-serif text-white">
            <li>Home</li>
            <li>Bestsellers</li>
            <li>About Us</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="hidden md:flex ">
          <button className="bg-[#FFC0CB] p-1 px-4 rounded-md text-[#251515] font-serif font-semibold">
            Contact Us
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburger} className="h-4 w-4 " />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-[#251515] w-full px-8 text-white font-serif md:hidden"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-white hover:text-[#251515] rounded-md">
            Home
          </li>
          <li className="p-4 hover:bg-white hover:text-[#251515] rounded-md">
            Bestsellers
          </li>
          <li className="p-4 hover:bg-white hover:text-[#251515] rounded-md">
            About Us
          </li>
          <li className="p-4 hover:bg-white hover:text-[#251515] rounded-md">
            Testimonials
          </li>
          <div className="flex flex-col my-4 ">
            <button className="bg-[#FFC0CB] p-4 px-4 rounded-md text-[#251515] font-serif font-semibold">
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
