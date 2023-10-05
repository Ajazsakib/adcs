import AppointmentForm from '@/components/appointForm/AppointmentForm'
import AppointmentBanner from '@/components/banner/AppointmentBanner'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
        <AppointmentBanner message="Book your Seat" heading="Appointment" />
        <AppointmentForm />
      <Footer />
    </div>
  )
}

export default page