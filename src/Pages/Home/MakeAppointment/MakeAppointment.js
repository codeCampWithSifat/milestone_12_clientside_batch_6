import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-16"
    style={{
        background : `url(${appointment})`
    }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="lg:w-1/2 rounded-lg shadow-2xl mt-[-190px] hidden lg:block"
          />
          <div>
            <h2 className="text-md text-primary font-bold">Appointment</h2>
            <h1 className="text-4xl font-bold text-white mt-4">Make An Appointment</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Lets Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
