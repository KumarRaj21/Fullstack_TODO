import React from 'react'
import { NavLink} from 'react-router-dom';
import img1 from '../images/wrk-ToDoListsIMGT.jpg';
const Landingpage = () => {
  return (
    (<div className='App-container-2'>
      <div className='app-container-2-head'>
        <div className='app-container-2-head-1'>GOGO</div>
        <div className='app-container-2-head-2'>
          <NavLink to='/'>HOME</NavLink>
        <NavLink to='/login'>LOGIN</NavLink>
        </div>
        
      </div>
      <div className='app-container-2-body'>
        <div className='app-container-2-1'>
        <svg width="243" height="565" viewBox="0 0 243 565" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C104.5 41.1667 293.4 206.8 225 564" stroke="url(#paint0_linear_2_34)" stroke-opacity="0.06" stroke-width="6"/>
<defs>
<linearGradient id="paint0_linear_2_34" x1="-23.5" y1="-37.5" x2="333" y2="602.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#343045"/>
<stop offset="0.151042" stop-color="#C0B7E8"/>
<stop offset="0.760417" stop-color="#8176AF"/>
<stop offset="0.973958" stop-color="#343045"/>
</linearGradient>
</defs>
</svg>
        <div className='app-container-2-1-head'>
          GET THINGS DONE WITH GOGO
        </div>
        <div className='app-container-2-1-content'>Login to add your daily tasks and make your tasklist so easier with GOGO app</div>
        <div className='app-login-navlink'>
          <NavLink to='/login'>Login</NavLink>
          </div>
      </div>
      <div className='app-container-2-2'>
      <svg width="629" height="728" viewBox="0 0 629 728" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M623.82 147.059C547.89 159.812 403.34 232.309 432.579 420.274C461.817 608.238 337.383 699.64 271.511 721.845" stroke="url(#paint0_linear_106_40)" stroke-width="6"/>
<path d="M628.5 362.282C418.448 351.828 -0.719422 409.021 3.02492 721.415" stroke="url(#paint1_linear_106_40)" stroke-width="6"/>
<path d="M191.683 1C188.891 121.393 220.63 373.291 369.921 417.744C519.212 462.197 522.362 642.437 505.275 727" stroke="url(#paint2_linear_106_40)" stroke-width="6"/>
<defs>
<linearGradient id="paint0_linear_106_40" x1="581.696" y1="168.538" x2="360.789" y2="653.244" gradientUnits="userSpaceOnUse">
<stop stop-color="#343045"/>
<stop offset="0.276042" stop-color="#8176AF"/>
<stop offset="0.739583" stop-color="#C0B7E8"/>
<stop offset="1" stop-color="#343045"/>
</linearGradient>
<linearGradient id="paint1_linear_106_40" x1="596.162" y1="354.979" x2="9.93306" y2="663.922" gradientUnits="userSpaceOnUse">
<stop stop-color="#343045"/>
<stop offset="0.213542" stop-color="#C0B7E8"/>
<stop offset="0.71875" stop-color="#8176AF"/>
<stop offset="1" stop-color="#343045"/>
</linearGradient>
<linearGradient id="paint2_linear_106_40" x1="203.007" y1="34.9373" x2="502.607" y2="698.228" gradientUnits="userSpaceOnUse">
<stop offset="0.0104167" stop-color="#343045"/>
<stop offset="0.229167" stop-color="#C0B7E8"/>
<stop offset="0.776042" stop-color="#8176AF"/>
<stop offset="1" stop-color="#343045"/>
</linearGradient>
</defs>
</svg>
<img src={img1} alt=''/>
      </div>
    </div>
      </div>
      )
  )
}

export default Landingpage