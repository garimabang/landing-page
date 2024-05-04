import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-[#6D4C41] mt-[84px]">
      <div className="md:max-w-[1000px] m-auto max-w-[400px] md:py-[50px] py-2 h-[300px]">
        <h1 className="text-center font-serif text-4xl text-[#FFC0CB] py-4">
          For customized cakes for your special events
        </h1>
        <p className="text-center text-white text-lg py-4">
          Please call us on +91 00000 00000 or visit our store to place your
          orders.
        </p>
        <div className="flex justify-center py-4">
          <button className="bg-[#FFC0CB] p-1 px-4 rounded-md text-[#251515] font-serif font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
