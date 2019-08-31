import React, { Component } from "react";
import pic1 from './images/pic1.jpg'
class Productcard extends Component {
  state = {};
  render() { 
    const {name,image,details}=this.props
    return (

      <div className="productcard">
      <img src={require(`${image}`)} alt={image}></img>
      <div className="pdetail">
          <h2>{name}</h2>
          <ul>
              {details.map(det=>{return(<li>{det}</li>)})}
          </ul>
      </div>
  </div>
      );
  }
}

export default Productcard;