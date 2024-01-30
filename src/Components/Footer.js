import React from 'react'
import logo from "../images/logo.svg"
import insta from "../images/insta.svg"
import twitter from "../images/twitter.svg"
import linkdin from "../images/linkdin.svg"

function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the F/ooter to full width. --> */}
      <div className="container " style={{ width: "100%" }}>

        <footer className=" text-center text-lg-start " style={{ backgroundColor: "#6F6F6F", color: "white" }}>
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row my-4">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px" }}>
                  <img src={logo} alt="" />
                </div>


                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <div className="SocialMedia">

                      <img src={linkdin} alt="" />


                    </div>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <img src={twitter} alt="" />

                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <img src={insta} alt="" />
                    </a>
                  </li>
                </ul>

              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Pages</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>History</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Products</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Profile</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Contact</a>
                  </li>

                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Service</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Hardware Unit</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Manufacturer Unit</a>
                  </li>

                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Maps Location</h5>

                <ul className="list-unstyled">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154419!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706446482053!5m2!1sen!2sin" width="250" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            Copyright © Swaraj Enteprise LLC. All rights reserved. | Powered by Creative Edge
          </div>
          {/* <!-- Copyright --> */}
        </footer>

      </div>
      {/* <!-- End of .container --> */}


    </>
  )
}

export default Footer
