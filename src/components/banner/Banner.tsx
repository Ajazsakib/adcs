import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>

                <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                <div className="btn-container ">
                  <Link href="/make-appointment" target="_blank" className="btn btn-appointment">Make appoinment <i className="icofont-simple-right ml-2  "></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner