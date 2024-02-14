import React from 'react'
import "../styles/History.css"
import history from "../images/history.svg"
import trusted from "../images/trusted.svg"
import Renu from "../images/Renu.svg"
import Gartech from "../images/Gartech.svg"
import Vasundhara from "../images/Vasundhara.svg"
import SVS from "../images/SVS.svg"
import Electronica from "../images/Electronica.svg"


function History() {
  return (
    <>
    <div style={{width:"100%",height:"auto",backgroundColor:"#CDC3A9"}}>

    
    <h1 style={{textAlign:"center",fontFamily:"Poppins",fontWeight:"600",color:"#003966"}} className='pt-5'> History of our enterprise</h1>
    
    <div className="img" style={{textAlign:"center",marginTop:"3vw"}} >

    <img src={history} alt="" style={{width:"100%",paddingLeft:"3vw",paddingRight:"3vw",paddingBottom:"3vw",paddingTop:"2vh"}} />
    </div>
    
    </div>

    <div className="trusted by mt-5">

        <h2 style={{textAlign:"center"}}>Our Clients</h2>

        <div className="icons" >
            <img src={Renu} alt="" />
            <img src={Gartech} alt="" />
            <img src={Vasundhara} alt="" />
            <img src={SVS} alt="" />
            {/* <img src={Electronica} alt="" /> */}
            
        
        </div>
    </div>
    </>
  )
}

export default History
