import React from "react";
import Card from "./Card";

const Bestsellers = () => {
  return (
    <div className="w-full bg-white">
      <div className="md:max-w-[1000px] m-auto max-w-[600px] py-[84px] md:h-[650px]">
        <h1 className="text-center font-serif text-4xl text-[#5D3317] font-semibold">
          Our Bestsellers
        </h1>
        <div className="flex gap-6 py-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center p-4">
          <button className="flex bg-[#FFC0CB] p-2 px-4 rounded-md text-[#251515] font-serif font-semibold">
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
