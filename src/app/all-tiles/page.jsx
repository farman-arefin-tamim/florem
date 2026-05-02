import React from "react";

const AllTilesPage = async () => {
  const res = await fetch("https://florem.vercel.app/data.json");
  const tiles = await res.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl font-bold text-[#2b1e16]">
        All Tiles
      </h1>
      {tiles.map((data) => {
        return (
          <div key={data.id} className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src={data.image}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#2b1e16] rounded-full text-white">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTilesPage;
