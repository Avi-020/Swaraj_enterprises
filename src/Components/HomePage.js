import React from 'react'
import "../styles/Homepage.css"
import store from '../images/store.svg'

function HomePage() {
  return (
    <>

      <div className="main">
 

        <div className="left">
        <div className="mstore">     <img src={store} alt="" style={{ width: "80%", height: "auto"}} /></div>
          <h1>Welcome to our wholesale Retailer distribution
            Enterprise</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
          <div className="contact">
            Contact Us
          </div>

        </div>


        <div className="right">

<div className="store">
          <img src={store} alt="" style={{ width: "80%", height: "auto"}} />
          </div>



        </div>


      </div>



    </>
  )
}

export default HomePage
