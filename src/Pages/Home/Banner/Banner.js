import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero h-2/5 mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className=" w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">See Your Favourite Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
