import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="w-full bg-white">
      <div className="md:max-w-[1000px] m-auto grid md:grid-cols-2 max-w-[400px] md:py-[96px] md:gap-[96px] gap-[50px]">
        <img src={about} className="md:order-first order-last" />
        <div className="md:p-8 md:pb-0 pb-8">
          <h1 className="font-serif text-4xl text-[#5D3317] font-semibold">
            About Us
          </h1>
          <p className="py-6 text-xl text-[#5D3317]">
            At Cakery, we believe that every celebration deserves a sweet touch.
            That is why we pour our hearts and souls into creating cakes that
            not only tantalize the taste buds but also capture the essence of
            your special moments. From birthdays and weddings to anniversaries
            and corporate events, we are here to turn your dreams into delicious
            reality. Let us sweeten your special moments with our delicious
            creations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
