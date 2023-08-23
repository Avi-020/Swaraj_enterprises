import React from 'react'
import "../styles/Homepage.css"
import store from '../images/store.svg'

function HomePage() {
  return (
    <>

      <div className="main" style={{backgroundColor:"#F7F7F7"}}>
        <div className="left">
          <h1>Welcome to our wholesale Retailer distribution
            Enterprise</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
          <div className="contact">
            Contact Us
          </div>

        </div>






        <div className="right">


          <img src={store} alt="" style={{ width: "80%", height: "auto"}} />



        </div>


      </div>



    </>
  )
}

export default HomePage
