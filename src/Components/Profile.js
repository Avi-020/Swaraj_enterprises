import React from 'react'
import "../styles/Profile.css"
import owner from "../images/owner.svg"

import insta from "../images/insta.svg"
import twitter from "../images/twitter.svg"
import linkdin from "../images/linkdin.svg"

function Profile() {
  return (
    <>
    
    <div className="profile">
    <h1>Owners Profile</h1>

<div className="main">

<div className="image">

<img src={owner} alt="" />

</div>

<div className="info">

<h3 className='ownerName'>Gaurav Naik</h3>
<h3 className='Cname'>Founder-Swaraj Enterprise</h3>

<p>

Contextual marketing increased genuine leads

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever

</p>

<div className="SocialMedia">

<img src={linkdin} alt="" />
<img src={twitter} alt="" />
<img src={insta} alt="" />

</div>

</div>
</div>






    </div>
    
    
    </>
  )
}

export default Profile
