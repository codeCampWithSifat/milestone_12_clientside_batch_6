import React from "react";

const AvailableOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl mt-20 ">
      <div className="card-body">
        <h2 className="card-title justify-center text-primary">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0 }
            className="btn btn-primary w-1/2 text-white"
            onClick={() => setTreatment(option)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
