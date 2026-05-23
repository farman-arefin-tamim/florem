import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-[#fff6ef] w-full py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/about.jpg"
            alt="About Florem"
            width={600}
            height={500}
            className="rounded-2xl w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[#2b1e16] text-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm text-gray-300">Years of Experience</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <h3 className="text-amber-800 text-sm font-semibold uppercase tracking-widest">
            About Us
          </h3>
          <h1 className="text-4xl font-bold text-[#2b1e16] leading-snug">
            Why Choose <br /> Florem Paving?
          </h1>
          <p className="text-gray-500 leading-relaxed">
            We are a professional outdoor paving company dedicated to
            transforming driveways, patios, and outdoor spaces with
            high-quality, long-lasting results. Functional and visually
            appealing paving solutions tailored to each client&apos;s needs.
          </p>

          
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-[#2b1e16]">500+</p>
              <p className="text-xs text-gray-500 mt-1">Projects Done</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-[#2b1e16]">200+</p>
              <p className="text-xs text-gray-500 mt-1">Happy Clients</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-[#2b1e16]">50+</p>
              <p className="text-xs text-gray-500 mt-1">Tile Varieties</p>
            </div>
          </div>

         
          <ul className="space-y-3 pt-2">
            {[
              "Premium quality ceramic & porcelain tiles",
              "Transparent pricing with no hidden costs",
              "On-time project delivery guaranteed",
              "Expert team with 15+ years experience",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 w-5 h-5 rounded-full bg-amber-800 text-white text-xs flex items-center justify-center shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link href="/all-tiles">
            <button className="btn bg-[#2b1e16] text-white rounded-full mt-4">
              Explore Our Tiles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;