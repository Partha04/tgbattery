import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import contactus from './assets/contactus.png' 
import "./contactus.css";
import { employee } from "./data/employee";
class Contactus extends Component {
  state = {};
  render() {
    return (
      <div className="contactus">
        <Navbar />
        <img className="dealerimg" src={contactus} alt="dl" />
        <div className="contactform">
          <div className="map">
            <h2>Locate Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.978939065755!2d88.32194851489605!3d22.542461685198322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730f88238fd%3A0xf8e39901d28a62fe!2sGupta%20Auto%20Tech!5e0!3m2!1sen!2sin!4v1567273455547!5m2!1sen!2sin"></iframe>
          </div>

          <div className="cname">
            <div className="cadd">
              <h1>Gupta Autotech</h1>
              <h2>(Propriter Mr. Rajesh Kr. Gupta)</h2>
              <h2 className="under">Contact No: 9874197755</h2>
              <br />
              <div className="adress">
                <h4>Adress</h4>
                <p>18A.Mohan Chand Road,
                Khidirpur,Kolkata,
                West Bengal-700 023</p>
              </div>
            </div>
              <br />
            <h3 className="our">Our Team</h3>
            <table>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Phone no</th>
              </tr>
              {employee.map(emp => {
                return (
                  <tr>
                    <td>{emp.name}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.mobileno}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contactus;
