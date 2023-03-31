import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  // backend intregration code
  const [clientSecrete, setClientSecret] = useState("");
  const { price, email, patientName , _id} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecrete, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      //   setSuccess("Congrates Your Payment Successessfully Paid");
      //   setTransactionId(paymentIntent.id);
      const payment = {
        patientName,
        email,
        price,
        transactionId: paymentIntent.id,
        bookingId  : _id
      };
      fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrates Your Payment Successessfully Paid");
            setTransactionId(paymentIntent.id);
          }
        });
      console.log("paymentIntent", paymentIntent);
    }
    setProcessing(false);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <p className="text-red-800 mt-4">{cardError}</p>
          <button
            className="btn btn-sm mt-6"
            type="submit"
            disabled={!stripe || !clientSecrete || processing}
          >
            Pay
          </button>
        </form>
      </div>
      {success && (
        <div>
          <p className="text-violet-800">{success}</p>
          <p className="text-violet-800 font-bold">
            Your TrnasactionId : {transactionId}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
