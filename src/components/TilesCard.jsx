import React from "react";

const TilesCard = ({ data }) => {
  console.log(data);
    return (
         <div>
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={data.image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>
          {data.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-2xl">View Details</button>
        </div>
      </div>
    </div>
  </div>
    );

};

export default TilesCard;
