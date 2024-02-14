import React from 'react'
import "../styles/Homepage.css"
import store from '../images/store.svg'

function HomePage() {
  return (
    <>

      <div className="main" style={{ backgroundColor: "#F7F7F7", paddingBottom: "25vw",backgroundImage:"url(https://lh5.googleusercontent.com/p/AF1QipPgHkkaKlL5E3sD140UdONI2cA9zHQoGzq1PY4t=w1080-k-no)" }}>






{/* 
        <div className="right">


          <img src={store} alt="" style={{ width: "80%", height: "auto" }} />



        </div> */}
        <div className="left">
          <div className='heading'>Our commitment to quality isn't just a promise;  it's a tradition that spans generations</div>
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p> */}
          <h5 className='ml-5 CoHeading'><b>"Quality isn't just a goal; it's our standard</b></h5>
          
          <div className="contact">
            Contact Us
          </div>
        </div>
        

        
      </div>
     



    </>
  )
}

export default HomePage
