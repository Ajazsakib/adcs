import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';


const Header = () => {

  const username = Cookies.get("username");
  // const router = useRouter()
  const handleLogout = ()=>{
    // Cookies.remove('token');
    // Cookies.remove('username');

    // console.log(username)

    // router.push("/login")
  }
  

  

  return (
    <div>
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@demo.com</a></li>
                  <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-end text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890" className='text-decoration-none'>
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" alt="" className="img-fluid" />DEMO
            </Link>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
              aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icofont-navigation-menu"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">About</a></li>
                <li className="nav-item"><a className="nav-link" href="">Services</a></li>



                <li className="nav-item"><a className="nav-link" href="">Contact</a></li>

                <li className='nav-item active'><a className='nav-link' href="">{username ? username : ""}</a></li>

                <li className="nav-item"><Link className="btn btn-appointment" href="/booking-status">Booking Status</Link></li>
                <li className="nav-item"><button className="btn btn-appointment" onClick={handleLogout}>Logout</button></li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header