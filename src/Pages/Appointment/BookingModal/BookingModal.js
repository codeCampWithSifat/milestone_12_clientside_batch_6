import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from 'react-hot-toast';


const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
  const { name: serviceName, slots , price} = treatment;
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatmentName: serviceName,
      patientName: name,
      slot,
      email,
      phone,
      price
    };

    // send data to the server and one close the  modal and display the success toast

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          refetch()
          toast.success("Booked Your Seat Successfully");
        } else {
          toast.error(data.message)
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-primary text-center my-4">
            {serviceName}
          </h3>
          <form className="grid grid-cols-1 gap-4" onSubmit={handleBooking}>
            <input
              name="date"
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full "
              required
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full "
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered w-full "
              required
              autoComplete="off"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
