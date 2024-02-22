import React from 'react'
// import linkdin from "../images/linkdin.svg"
import phone from "../images/phone.svg"
import message from "../images/message.svg"
import location from "../images/location.svg"
import "../styles/ContactUs.css"

function ContactUs() {
    return (
        <div style={{paddingBottom:"4vh"}}>
            <h1 style={{ textAlign: "center" }}>Contact Us</h1>

            <div className='contactUS' >

            <h3><img src={phone} alt="" style={{marginLeft:"1vh" , marginRight:"2vh"}} />+91 98123 98123</h3>
           <h3> <img src={message} alt="" style={{marginRight:"2vh"}} />swarajenterprise@gmail.com</h3>
           <h3 style={{marginRight:"1vh"}}><img src={location} alt="" style={{marginRight:"2vh"}} />123 street, xyz road, abc</h3> 

            </div>
        </div>
    )
}

export default ContactUs
