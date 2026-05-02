import React from "react";

const TilesCard = ({ data }) => {
  console.log(data);
    return (
    <div>
    <div className="card bg-base-100  shadow-sm">
      <figure className="relative">
        <img src={data.image}
        />
        <div className="badge badge-soft badge-primary absolute top-4 left-2">{data.category}</div>
      </figure>
     
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>
          {data.description}
        </p>
        <div className="flex justify-between">
            <div>Price: ${data.price}</div>
            <div>
                {data.inStock ? <div className="badge badge-outline badge-primary">In Stock</div>: <div className="badge badge-outline badge-error">Out of Stock</div>}
            </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-2xl">View Details</button>
        </div>
      </div>
    </div>
  </div>
    );

};

export default TilesCard;
