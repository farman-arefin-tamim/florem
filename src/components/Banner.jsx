import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-12 my-12">
      <div className="col-span-6 w-full">
        <div className="space-y-4">
          <h1 className="text-6xl text-[#2b1e16] font-medium">
            Premium Outdoor <br />
            Paving Solutions
          </h1>
          <p className="text-lg text-gray-600">
            We complete every project on schedule with transparent pricing and
            no hidden costs—quality work at fair rates.
          </p>
        </div>
        <div className="mt-4">
          <Image src="/hero-1.jpg" width={600} height={700} alt="Banner" />
        </div>
      </div>
      <div className="col-span-6">
        <Image src="/hero-2.jpg" width={600} height={500} alt="Banner2" />
        <div>
          <div className="flex items-center justify-center flex-col mt-16 space-y-2">
            <h2 className="text-[#2b1e16] text-2xl font-semibold text-center">
              All Tiles in One Place
            </h2>
            <button className="btn bg-[#2b1e16] text-white rounded-full">
              Browse Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
