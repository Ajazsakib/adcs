"use-client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookingStatus = () => {

  const [bookigDetails, setBookingDetails] = useState()

  const getBookingStatus = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/appointment-list/appointment-list?user=6513d76879f626f32b8fcf18`)
    console.log(res.data, ">>>>>>>>>")

    const timestamp = new Date("2023-10-05T12:10:31.328Z");

    let formattedDate = timestamp.toLocaleString();

    const day = timestamp.getDate();
    const month = timestamp.getMonth() + 1; // Months are 0-based, so add 1
    const year = timestamp.getFullYear();

    formattedDate = `${day}/${month}/${year}`;

    res.data.data.createdAt = formattedDate

    setBookingDetails(res.data)

  }

  useEffect(() => {
    getBookingStatus()
  }, [])

  console.log(bookigDetails?.data)

  return (
    <section className='booking-status section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Number</th>
                  <th>Current Running Number</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>{bookigDetails?.data?.createdAt}</td>
                  <td>{bookigDetails?.data?.waitingNumber}</td>
                  <td>17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingStatus