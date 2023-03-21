import React from 'react'
import InfoCard from './InfoCard'
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"

const InfoCards = () => {
    const cardData = [
        {
            id : 1,
            name : "Opening Hours",
            description : "Open 9.00 am to 5.00 pm Everyday",
            icon : clock,
            bgClass :"bg-primary"
        },
        {
            id : 2,
            name : "Visit our location",
            description : "Brooklyn, NY 10036, United States",
            icon : marker,
            bgClass :"bg-neutral"
        },
        {
            id : 3,
            name : "Contact us now",
            description : "+000 123 456789",
            icon : phone,
            bgClass :"bg-primary"
        }
    ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-14'>
      {
        cardData.map(card => <InfoCard
         key={card.id}
         card={card}
        ></InfoCard>)
      }
    </div>
  )
}

export default InfoCards
