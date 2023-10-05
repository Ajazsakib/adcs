import React from 'react'

const AppointmentBanner = ({heading, message}) => {
  return (
    <div>
      <section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center position-relative">
          <span className="text-white">{message}</span>
          <h1 className="text-capitalize mb-5 text-lg">{heading}</h1>

         
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AppointmentBanner