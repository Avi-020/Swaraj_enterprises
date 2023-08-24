import React from 'react'
import "../styles/History.css"
import history from "../images/history.svg"
import trusted from "../images/trusted.svg"
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

        <h6 style={{textAlign:"center"}}>Trusted by 45M+ users</h6>

        <div className="icons" >
            <img src={trusted} alt="" />
            <img src={trusted} alt="" />
            <img src={trusted} alt="" />
            <img src={trusted} alt="" />
            
        
        </div>
    </div>
    </>
  )
}

export default History
