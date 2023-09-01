
import "../styles/Navbar.css"
import logo from "../images/logo.svg"
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
  <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="stylenavbar">
      <img src={logo} alt="" />
      <Typography className="swaraj" style={{fontWeight:"550",font:"lato",fontSize:"20px",marginTop:"2%"}}>Swaraj enterprise</Typography>
      <button className="menu-button" onClick={toggleMenu}>
        <MenuIcon/>
      </button></div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        
        <a className="nav-link nav-link-ltr active" href="#" >Home</a>
        <a className="nav-link nav-link-ltr" href="#">History</a>
        <a className="nav-link nav-link-ltr" href="#">Products</a>
        <a className="nav-link nav-link-ltr" href="#">Profile</a>
        <a className="nav-link nav-link-ltr" href="#">Contact us</a>
        <a className="nav" >Social Media</a>
        <div style={{display:"flex",justifyContent:"row"}}>     
           <div className="facebook" style={{marginLeft:"2%",marginTop:"1%"}}><FacebookOutlinedIcon ></FacebookOutlinedIcon></div>
        <div className="twitter" style={{marginLeft:"2%",marginTop:"1%"}}><Twitter/></div>
        <div className="LinkedIn" style={{marginLeft:"2%",marginTop:"1%"}}><LinkedIn/></div>
        <div className="Instagram" style={{marginLeft:"2%",marginTop:"1%"}}><Instagram/></div>
        </div>


    </div>
    </div>


    
    </>
  )
}

export default Navbar
