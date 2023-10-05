import AppointmentBanner from '@/components/banner/AppointmentBanner'
import BookingStatus from '@/components/bookingStatus/BookingStatus'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <AppointmentBanner heading="Booking Status" />

      <BookingStatus />

      <Footer />
    </div>
  )
}

export default index