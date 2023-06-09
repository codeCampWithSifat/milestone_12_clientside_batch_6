import React from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment'

const Appointment = () => {
    const [selected, setSelected] = React.useState(new Date());

  return (
    <div>
      <AppointmentBanner selected={selected} setSelected={setSelected} />
      <AvailableAppointment selected={selected} />
    </div>
  )
}

export default Appointment
