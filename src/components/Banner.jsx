import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 my-12 px-4">
      <div className="w-full">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl text-[#2b1e16] font-medium leading-tight">
            Discover Your Perfect <br />
            Aesthetic
          </h1>
          <p className="text-lg text-gray-600">
            We complete every project on schedule with transparent pricing and
            no hidden costs—quality work at fair rates.
          </p>
          <Link href="/all-tiles">
            <button className="btn bg-[#2b1e16] text-white rounded-full mt-2">
              Browse Now
            </button>
          </Link>
        </div>
        <div className="mt-6">
          <Image
            src="/hero-1.jpg"
            width={600}
            height={700}
            alt="Banner"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      <div>
        <Image
          src="/hero-2.jpg"
          width={600}
          height={500}
          alt="Banner2"
          className="rounded-2xl w-full object-cover"
        />
        <div className="flex items-center justify-center flex-col mt-10 space-y-3">
          <h2 className="text-[#2b1e16] text-2xl font-semibold text-center">
            All Tiles in One Place
          </h2>
          <p className="text-gray-500 text-center max-w-xs">
            From ceramic to marble, find the perfect tile for every space.
          </p>
          <Link href="/all-tiles">
            <button className="btn bg-[#2b1e16] text-white rounded-full">
              Explore Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
