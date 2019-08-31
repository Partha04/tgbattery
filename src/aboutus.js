import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./aboutus.css";

class Aboutus extends Component {
  state = {};
  render() {
    return (<div>
      <Navbar/>
      <div class="outer">
        <div class="sideabout">
          <div class="sidetab">Company Details</div>
          <div class="sidetab">Company Details</div>
          <div class="sidetab">Company Details</div>
          <div class="sidetab">Company Details</div>
          <div class="sidetab">Company Details</div>
          <div class="sidetab2">Locate us</div>
        </div>
        <div class="aboutdetails">
          <h2>About us</h2>

          <p>
            Today's investment climate offers unprecedented opportunities. At
            Gupta autotech, our mission is to help clients take advantage of those
            opportunities by providing them with three key tools:
            <br/>
            <br/>
            <ul>
              <li>A clear understanding of their financial goals</li>
              <li>A well-defined roadmap for achieving those goals</li>
              <li>
                Ongoing advice to help adjust their roadmap when their needs
                change
              </li>
            </ul>
            <br/>
            Our services cover all areas of financial management, from
            investment and retirement planning to risk management and estate
            conservation. We specialize in helping our clients develop a
            comprehensive, cohesive financial strategy that fits their unique
            needs and enables them to meet both short- and long-term objectives.
            On our website, you'll find valuable information for evaluating your
            current position and progress toward financial goals. We offer
            educational articles that outline financial concepts and highlight
            products designed to fill the gaps in your financial strategy.
            You'll also find calculators that will help you assess your current
            and future needs. Please remember to visit our website often, as our
            content is constantly changing. For help with your financial
            management, or for more information on [Company], please contact us
            today.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default Aboutus;
