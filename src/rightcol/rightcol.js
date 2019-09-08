import React, { Component } from "react";
import slider4 from './slider4.jpg'
import slider5 from './slider5.jpg'
import slider6 from './slider6.jpg'
class Rightcol extends Component {
    state = {  }
    render() { 
        return ( 
            
          <div className="rightcol">
          <img src={slider4} alt="D"/>          
          <img src={slider5} alt="D"/>          
          <img src={slider6} alt="D"/>          

        </div>
         );
    }
}
 
export default Rightcol;