import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({selected, setSelected}) => {

//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, "PP")}.</p>;
//   }
  return (
    <header>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-2/5 rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
