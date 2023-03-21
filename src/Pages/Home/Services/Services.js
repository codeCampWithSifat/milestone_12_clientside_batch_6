import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      image: fluoride,
    },
    {
      id: 2,
      name: "Cavity Treatment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      image: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      image: whitening,
    },
  ];
  return (
    <div className="mt-20">
      <div>
        <h3 className="text-center text-md font-bold text-primary ">
          OUR SERVICES
        </h3>
        <h1 className="text-center text-3xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
