import React from "react";
import TestCard from "./TestCard";

const Testinomials = () => {
  return (
    <div className="w-full bg-white">
      <div className="md:max-w-[1000px] m-auto max-w-[400px] py-[84px] md:h-[650px]">
        <h1 className="text-center font-serif text-4xl text-[#5D3317] font-semibold">
          Testimonials
        </h1>
        <div className="md:flex md:gap-6 py-8 ">
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
