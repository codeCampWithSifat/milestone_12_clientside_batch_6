import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="mx-20">
          <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Appointment</PrimaryButton>
        </div>
        <img
          src={treatment}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        
      </div>
    </div>
  );
};

export default DentalCare;
