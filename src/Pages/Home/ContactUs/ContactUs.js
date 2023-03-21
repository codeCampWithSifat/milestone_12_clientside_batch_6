import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        height: "65vh",
      }}
      className=""
    >
      <div className="text-center mt-20">
        <h4 className="text-primary  font-bold">Contact Us</h4>
        <h1 className="text-3xl text-white">Stay Connected With Us</h1>
      </div>

      <form className="text-center">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="input  w-1/2 mt-5 "
          required
        />
         <input
          type="text"
          placeholder="Subject"
          className="input  w-1/2  mx-5 my-5"
          required
        />
         <textarea
          type="text"
          placeholder="Type Your Message"
          className="textarea textarea-bordered  w-1/2 h-8 p-4"
          required
        /> <br />
       <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactUs;
