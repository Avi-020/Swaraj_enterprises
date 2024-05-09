import React from 'react'
import "../styles/OurProduct.css"
import bolts from "../images/bolts.svg"
import socketScrew from "../images/socketScrew.svg"
import selfdrivingscrew from "../images/selfdrivingscrew.svg"
import sheetmetalscrews from "../images/sheet-metal-screws.svg"
import MachinScrew from "../images/MachinScrew.svg"
import CarriageBolt from "../images/CarriageBolt.svg"
import Revets from "../images/Revets.svg"
import foundationBoalt from "../images/foundationBoalt.svg"
import Mesh from "../images/Mesh.svg"
import Nails from "../images/Nails.svg"
import Eyenut from "../images/Eyenut.svg"
import anchor from "../images/anchor.jpg"
import nuts from "../images/nuts.png"
import washer from "../images/washer.png"
import Studs from "../images/Studs.png"
import CoachScrew from "../images/CoachScrew.png"
import ScaffoldingHardware from "../images/ScaffoldingHardware.jpg"
import WeldingHardware from "../images/WeldingHardware.jpg"
import HooksPins from "../images/Hooks&Pins.jpg"
import PipeSupportSolutions from "../images/PipeSupportSolutions.png"


function OurProduct() {
  return (
   <>
   {/* <!-- Header --> */}
<header className=" text-center py-5 mb-4" style={{backgroundColor:"#2A769A"}}>
  <div className="container">
    <h1 className="fw-light text-white">Manufacturer Packaging Unit </h1>
  </div>
</header>

{/* <!-- Page Content --> */}
<div className="container">
  <div className="row">
    {/* <!-- Team Member 1 --> */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-5 shadow" >
        <img src={bolts} className=" card-img-top  OurProductImg" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Hex Head Screws / Bolts</h5>
          {/*   */}
        </div>
      </div>
    </div>
    {/* <!-- Team Member 2 --> */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-5 shadow">
        <img src={nuts} className=" card-img-top  OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Nuts</h5>
           
        </div>
      </div>
    </div>
    {/* <!-- Team Member 3 --> */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-5 shadow">
        <img src={socketScrew} className=" card-img-top  OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Socket Screws</h5>
           
        </div>
      </div>
    </div>
    

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-5 shadow">
        <img src={anchor} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Anchors</h5>
           
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={selfdrivingscrew} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Self Drilling Screws
</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={washer} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Washers</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={sheetmetalscrews} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Sheet Metal Screws
</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={MachinScrew} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Machine Screws</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={Studs} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Studs</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={CoachScrew} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Coach Screws</h5>
           
        </div>
      </div>
    </div>



    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={CarriageBolt} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Carriage Bolts</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={Revets} className=" card-img-top OurProductImg" alt="..."  />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Rivets</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={ScaffoldingHardware} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Scaffolding Hardware</h5>
           
        </div>
      </div>
    </div>



    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={WeldingHardware} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Welding Hardware</h5>
           
        </div>
      </div>
    </div>



    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={foundationBoalt} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Foundation Bolts</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={PipeSupportSolutions} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Pipe Support Solutions</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={Mesh} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Mesh</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={HooksPins} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Hooks & Pins</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={Nails} className=" card-img-top OurProductImg" alt="..."   />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Nails</h5>
           
        </div>
      </div>
    </div>


    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={Eyenut} className=" card-img-top OurProductImg" alt="... "    />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Eyenuts & Eyebolts</h5>
           
        </div>
      </div>
    </div>
   
  </div>
  {/* <!-- /.row --> */}

</div>
   
   
   </>
  )
}

export default OurProduct
