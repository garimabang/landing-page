import React from "react";
import Stars from "./Stars";
import blackforest from "../assets/blackforest.jpg";
// import cheesecake from "../assets/cheesecake.png";
// import redvelvet from "../assets/redvelvet.png";
// import genoise from "../assets/genoise.png";

const Card = () => {
  return (
    <div className="md:h-auto w-full bg-white shadow-md overflow-hidden rounded-lg">
      <img
        src={blackforest}
        className="md:h-[350px] h-[150px] w-full object-cover"
      />
      <p className="font-serif md:text-lg text-sm font-medium py-1 ml-4">
        Carrot Cake (500g)
      </p>
      <div>
        <Stars />
      </div>
    </div>
  );
};

export default Card;
