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

<h3 className='ownerName'>Swaraj Dhamale</h3>
BE Machanical, MBA
<h3 className='Cname'>
Co-Founder - Swaraj Enterprise</h3>

<p>


"Swaraj Enterprise was founded by two visionary entrepreneurs, Swati Dhamale and Swaraj Dhamale, with a shared passion for innovation and sustainability. Together, they embarked on a mission to revolutionize the energy sector by developing cutting-edge renewable technologies. Their unwavering commitment to a greener future and their complementary skills in engineering and business have propelled Swaraj Enterprise to new heights, making it a leading force in sustainable energy solutions."
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
