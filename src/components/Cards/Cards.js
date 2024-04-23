import React from 'react';
import "./Cards.css";
import title from "../../amenities/title.svg";
function Cards() {
  return (
    <div className='Cards'>
      <div className="cardHead">
        <div className="left">
            <h2>Add more ui/ux mock ups</h2>
            <p>Pinterest Communications</p>
        </div>
        <div className="right">
            <button></button>
        </div>
      </div>
      <div className="progressSection">
        <div className="labelSection">
            <img src={title} alt="Error in Loading" />
            <p>4/10</p>
        </div>
        <div className="progressBar">
            <div className="progress" style={{width:"40%"}}>
            </div>
        </div>
      </div>
      <div className="cardFooter">
        <h2>
            23 April 2024
        </h2>
      </div>
    </div>
  )
}

export default Cards;
