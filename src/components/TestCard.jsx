import React from "react";
import avatar from "../assets/avatar.png";
import TestStars from "./TestStars";

const TestCard = () => {
  return (
    <div className="md:h-auto w-full md:h-[400px] h-[350px] bg-[#FFC0CB] shadow-md overflow-hidden rounded-lg md:my my-6 ">
      <div className="flex flex-col items-center my-auto">
        <img src={avatar} className="w-20 h-20 m-4"></img>

        <h1 className="text-xl font-serif font-semibold ">Garima Bang</h1>
        <p className="text-sm">Indore,India</p>
        <TestStars />
        <p className="text-sm font-serif font-medium my-2 mx-6 text-center">
          “ I ordered a custom cake for my daughters birthday, and it was beyond
          my expectations! Not only was it beautifully decorated, but it tasted
          divine. The flavors were perfectly balanced, and the cake was
          incredibly moist. Cakery truly knows how to create a masterpiece.
          Highly recommend! “
        </p>
      </div>
    </div>
  );
};

export default TestCard;
