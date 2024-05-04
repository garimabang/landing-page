import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
      <div className="md:max-w-[1000px] m-auto grid md:grid-cols-2 max-w-[400px]">
        <div>
          <h1 className="md:leading-[72px] font-serif text-white md:text-6xl text-5xl text-[#FFC0CB] py-4 leading-[56px]">
            Cakes for your everyday cravings
          </h1>
          <p className="text-white md:text-xl py-4 text-lg">
            The essence of providing delicious treats for everyday enjoyment.
            Our cake shop offers something for those everyday moments when a
            sweet indulgence is needed.
          </p>
          <div className="flex gap-8 py-4">
            <button className="bg-[#FFC0CB] p-2 px-4 rounded-md text-[#251515] font-serif font-semibold">
              Order Now
            </button>
            <button className="bg-white p-2 px-4 rounded-md text-[#251515] font-serif font-semibold">
              See Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
