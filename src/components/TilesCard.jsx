import Link from "next/link";
import React from "react";

const TilesCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <figure className="relative overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-52 object-cover"
        />
        <div className="badge badge-soft badge-primary absolute top-3 left-3">
          {data.category}
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title text-[#2b1e16]">{data.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{data.description}</p>

        <div className="flex justify-between items-center mt-1">
          <div className="font-semibold text-[#2b1e16]">${data.price}</div>
          <div>
            {data.inStock ? (
              <div className="badge badge-outline badge-success text-xs">In Stock</div>
            ) : (
              <div className="badge badge-outline badge-error text-xs">Out of Stock</div>
            )}
          </div>
        </div>

        <div className="card-actions justify-end mt-2">
          <Link href={`/all-tiles/${data.id}`}>
            <button className="btn btn-sm bg-[#2b1e16] text-white rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;
