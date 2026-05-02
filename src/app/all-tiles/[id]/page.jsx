import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://florem.vercel.app/data.json");
  const tiles = await res.json();
  console.log(tiles);

  const tile = tiles.find((t) => t.id == id);
  console.log(tile);

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={tile.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tile.title}</h2>
          <p>{tile.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
