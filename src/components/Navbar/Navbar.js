import React from "react";
import "./Navbar.css";
import NAV_ROUTES from "../../Configurations/NavRoutes";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Task">
        <h2>Tasks</h2>
        <button>+</button>
      </div>
      <div className="navigations">
        {
          NAV_ROUTES.map((item,index)=>{
            return <NavLink to={item.path} key={index}>{item.text}</NavLink>
          })
        }
      </div>
    </div>
  );
}

export default Navbar;
