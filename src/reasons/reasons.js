import React from "react";
import './reasons.css'

const Reasons =({icon,heading, detail})=> {
  
        return (
        <div className='reason'>
             <div class="outer">
          <img class="imp" src={icon} alt="as"/>
        
        <div class="inner">
          <h3>{heading}</h3>
          <p>{detail}</p>
        </div>
      </div>
        </div>
      );
}
 
export default Reasons;