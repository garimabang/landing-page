import React from "react";
import twittericon from "../assets/twittericon.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#251515]">
      <div className="mx-[100px]">
        <div className="md:flex items-center justify-between md:pt pt-6 ">
          <h1 className="font-serif text-white text-3xl md:my-[64px] my-4">
            CAKERY
          </h1>
          <ul className="flex gap-6 font-serif text-white my-[64px] ">
            <li className="text-[#FFC0CB]">Home</li>
            <li className="text-[#FFC0CB]">Bestsellers</li>
            <li className="text-[#FFC0CB]">About Us</li>
            <li className="text-[#FFC0CB]">Contact Us</li>
            <li className="text-[#FFC0CB]">Help</li>
            <li className="text-[#FFC0CB]">Privacy</li>
          </ul>
        </div>
        <hr className="w-full m-auto"></hr>
        <div className="flex items-center justify-between">
          <p className="text-white text-sm my-[44px] ">
            © 2021 Cakery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <img src={twittericon}></img>
            <img src={Instagram}></img>
            <img src={Facebook}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
