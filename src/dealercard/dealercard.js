import React, { Component } from 'react';
class Dealercard extends Component {
    state = {  }
    render() { 
        const {id,dealername,adress}=this.props
        return (
            <div className="dealercard">
            <h3>{dealername}</h3>
            <h4>Adress</h4>            
            <div>
            {adress.map(det=>{return(<h5>{det}</h5>)})}
            </div>
            <a href="s">    
             <div className="go">
                 Go to Website
                 </div>   
            </a>
          </div>
          );

    }
}
 
export default Dealercard;