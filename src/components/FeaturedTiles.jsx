import React from "react";
import TilesCard from "./TilesCard";

const FeaturedTiles = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/data.json"}`,
    { cache: "no-store" }
  );
  const allTiles = await res.json();
  const tiles = allTiles.slice(0, 4);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold text-amber-700 uppercase tracking-widest mb-2">
          Our Collection
        </h2>
        <h1 className="text-4xl font-bold text-[#2b1e16]">Featured Tiles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((data) => (
          <TilesCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
