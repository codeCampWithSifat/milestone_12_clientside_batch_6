import React from 'react'
import Banner from '../Banner/Banner'
import ContactUs from '../ContactUs/ContactUs'
import DentalCare from '../DentalCare/DentalCare'
import InfoCards from '../InfoCards/InfoCards'
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='mx-6'>
       <Banner />
       <InfoCards />
       <Services />
       <DentalCare />
       <MakeAppointment />
       <Testimonials />
       <ContactUs />
    </div>
  )
}

export default Home
