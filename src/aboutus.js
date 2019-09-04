import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./aboutus.css";
import { aboutusinfo } from "./data/aboutusinfo";
class Aboutus extends Component {
  state = {
     aboutusinfo: aboutusinfo[0],
  };
  setdetails=(e)=>{
    this.setState(
      {aboutusinfo:aboutusinfo[e]}
    )
  }
  render() {
    return (
      <div>
        <Navbar />
        <div class="outerb">
          <div class="sideabout">
            <div class="sidetab" onClick={()=>this.setdetails(0)}>Company Details</div>
            <div class="sidetab" onClick={()=>this.setdetails(1)} >Vision and Mission</div>
            <div class="sidetab" onClick={()=>this.setdetails(2)}>Environmenal safty</div>
            <div class="sidetab"onClick={()=>this.setdetails(3)}>Awards</div>
            <div class="sidetab"onClick={()=>this.setdetails(4)}>Heritage</div>
            <a href="contactus">

            <div class="sidetab2">Locate us</div>
            </a>
          </div>
          <div class="aboutdetails">
            <h2>{this.state.aboutusinfo.heading}</h2>

            <p>{this.state.aboutusinfo.details.map(para=>{return(<p>{para}</p>)})}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Aboutus;
