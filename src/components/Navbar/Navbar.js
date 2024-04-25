import React,{useState} from "react";
import "./Navbar.css";
import NAV_ROUTES from "../../Configurations/NavRoutes";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="Task">
        <h2>Tasks</h2>
        <button onClick={()=> props.settrigger(!props.trigger)}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#1C1D22" fill-opacity="0.08"/>
<g opacity="0.4">
<path d="M18 14L10 14" stroke="#1C1D22" stroke-width="2" stroke-linecap="round"/>
<path d="M14 18L14 10" stroke="#1C1D22" stroke-width="2" stroke-linecap="round"/>
</g>
</svg>

        </button>
      </div>
      <div className="navigations">
        <div className="navigations-1">
        <svg width="21" height="176" viewBox="0 0 21 176" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.27219 113.287H20.0828" stroke="#1C1D22" stroke-opacity="0.1" stroke-width="2" stroke-linejoin="round"/>
<path d="M2.27219 64.7356H20.0828" stroke="#1C1D22" stroke-opacity="0.1" stroke-width="2" stroke-linejoin="round"/>
<path d="M2.27219 18.2069H20.0828" stroke="#1C1D22" stroke-opacity="0.1" stroke-width="2" stroke-linejoin="round"/>
<path d="M1 0L1.00001 176" stroke="#1C1D22" stroke-opacity="0.1" stroke-width="2" stroke-linejoin="round"/>
</svg>


        </div>
        <div className="navigations-2">{
          NAV_ROUTES.map((item,index)=>{
            return <NavLink to={item.path} key={index}>{item.text}</NavLink>
          })
        }</div>
      </div>
      <div className="container">
        <div className="mode-box">
          <button className="light-mode">
            <div className="lightmode-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>  
            </div>
<p>Light Mode</p>
          </button>
<button className="dark-mode">
  <div className="darkmode-svg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg></div>
<p>Dark Mode</p>
</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
