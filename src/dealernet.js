import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import dealernetwork from "./assets/dealernetwork.jpg";
import "./dealernet.css";
import Dealercard from "./dealercard/dealercard";
import { dealers } from "./data/dealers";
class Dealernet extends Component {
  state = {
    dealers: dealers
  };
  render() {
    return (
      <div className="dealernet">
        <Navbar />
        <div className="dealerbody">
          <img className="dealerimg" src={dealernetwork} alt="dl" />
          <h2>Dealer Network</h2>
          <div className="dealercardlist">
            {dealers.map(deals => {
              return (
                <Dealercard
                  key={deals.id}
                  dealername={deals.dealername}
                  adress={deals.adress}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dealernet;
