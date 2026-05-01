import React from "react";
import TilesCard from "./TilesCard";

const FeaturedTiles = async () => {
  const res = await fetch("https://florem.vercel.app/data.json");
  const tiles = await res.json();

  return (
    <div>
      <h1 className="text-center text-[#2b1e16] text-4xl font-bold mt-8">
        Featured Tiles
      </h1>
        <div>
            {
                tiles.map((data)=> <TilesCard key={data.id} data={data}></TilesCard>)
            }
        </div>
    </div>
  );
};

export default FeaturedTiles;
