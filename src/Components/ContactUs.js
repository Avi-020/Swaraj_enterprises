import React from 'react'
// import linkdin from "../images/linkdin.svg"
import phone from "../images/phone.svg"
import message from "../images/message.svg"
import location from "../images/location.svg"

function ContactUs() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Contact Us</h1>

            <div className="partition" style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                    <h4 style={{ marginLeft: "3vh" }}>
                    <img src={phone} alt=""  style={{marginLeft:"1vh",marginRight:"2vh"}}/>
                        Phone number</h4>
                        <p>+91 98123 98123</p>
                </div>
                <div style={{ flex: "1" }}>
                    <h4 style={{ marginLeft: "3vh" }}>
                    <img src={message} alt=""  style={{marginLeft:"1vh",marginRight:"2vh"}}/>
                        Gmail ID</h4>
                        <p>swarajenterprise@gmail.com</p>
                </div>
                <div style={{ flex: "1" }}>
                    <h4 style={{ marginLeft: "3vh" }}>
                    <img src={location} alt=""  style={{marginLeft:"1vh",marginRight:"2vh"}}/>
                        Address</h4>
                        <p>123 street, xyz road, abc</p>
                </div>


            </div>
        </div>
    )
}

export default ContactUs
