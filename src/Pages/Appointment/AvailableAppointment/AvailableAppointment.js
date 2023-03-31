import React, {  useState } from "react";
import { format } from "date-fns";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selected }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selected,"PP");

  const { data: appointmentOptions = [], isLoading , refetch} = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`https://milestone-12-backendside-bactch-6.vercel.app/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-[600px] mt-64 text-center">
        <button className="btn loading ">loading</button>
      </div>
    );
  }

  // useEffect(() => {
  //   fetch(`https://milestone-12-backendside-bactch-6.vercel.app/appointmentOptions`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointmentOptions(data);
  //     });
  // }, []);
  return (
    <div>
      <div>
        <h2 className="text-secondary text-2xl text-md font-bold text-center">
          Available Appointment On {format(selected, "PP")}
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {appointmentOptions.map((option, index) => (
          <AvailableOption
            key={index}
            option={option}
            setTreatment={setTreatment}
          ></AvailableOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selected={selected}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
