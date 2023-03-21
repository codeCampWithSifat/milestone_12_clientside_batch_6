import React from "react";

const Testimonial = ({ review }) => {
  const { name, location, img, description } = review;
  return (
    <div className="card  shadow-xl p-4">
      <div className="card-body">
        <p className="">{description}</p>
      </div>
      <div className="flex">
        <div className="mx-8">
          <img className="w-20" src={img} alt="" />
        </div>
        <div className="mt-4">
          <h2>{name}</h2>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
