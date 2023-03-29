import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const { treatmentName, appointmentDate, price, slot } = booking;
  return (
    <div className="w-96">
      <h3 className="text-3xl">Payment for {treatmentName} Service</h3>
      <p className="text-xl mt-4">
        Please Pay <strong className="text-violet-800">${price}</strong> For
        Your Appointment On {appointmentDate} At {slot}
      </p>
      <div className="mt-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
