import React from "react";
import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";

const Header = () => {
  return (
      <Marquee className="h-12 bg-[#2b1e16]">
        <div className="flex items-center h-full">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-center items-center mx-6">
              <PiStarFourFill className="text-yellow-600" />
              <span className="pl-4 text-white text-lg font-semibold">
                WELCOME TO FLOREM PAVING COMPANY
              </span>
            </div>
          ))}
        </div>
      </Marquee>
  );
};

export default Header;
