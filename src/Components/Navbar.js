import React from 'react'
import "../styles/Navbar.css"
import logo from "../images/logo.svg"


function Navbar() {
  return (
    <>
   <div className="navbar">
    <img src={logo} alt="" />
  <a className="nav-link nav-link-ltr active" href="#">Home</a>
  <a className="nav-link nav-link-ltr" href="#">History</a>
  <a className="nav-link nav-link-ltr" href="#">Products</a>
  <a className="nav-link nav-link-ltr" href="#">Profile</a>
  <a className="nav-link nav-link-ltr" href="#">Contact us</a>

</div>


    
    </>
  )
}

export default Navbar
