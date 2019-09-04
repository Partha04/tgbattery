import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./contactus.css";
class Contactus extends Component {
  state = {};
  render() {
    return (
      <div className="contactus">
        <Navbar />
        <div className="contactform">
          <div className="map">
            <h2>Locate Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.978939065755!2d88.32194851489605!3d22.542461685198322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730f88238fd%3A0xf8e39901d28a62fe!2sGupta%20Auto%20Tech!5e0!3m2!1sen!2sin!4v1567273455547!5m2!1sen!2sin"></iframe>
          </div>

          <div className="cname">
            <div className="cadd">
              <h2>Gupta Autotech</h2>
              <div className="adress">
                <h3>Adress</h3>
                <p>adress line `1</p>
                <p>adress line `1</p>
                <p>adress line `1</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contactus;
