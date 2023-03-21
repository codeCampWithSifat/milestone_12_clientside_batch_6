import React from "react";
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const reviews = [
        {
            id : 1 ,
            name : "Sifat Sayed",
            description : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : "California",
            img : people1,
        },
        {
            id : 2,
            name : "Fahim Canaria",
            description : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : "United Kingdom",
            img : people2,
        },
        {
            id : 3 ,
            name : "Junayed Siddque",
            description : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : "Canada",
            img : people3,
        }
    ]
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
            <h3 className="font-bold text-primary text-md">Testimonials</h3>
            <h3 className="text-3xl">What Our Patient Says</h3>
        </div>
        <div>
            <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {
            reviews.map(review => <Testimonial
                key={review.id}
                review={review} 
            ></Testimonial>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
