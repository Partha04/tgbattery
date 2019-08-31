import React from 'react';
import Navbar from './navbar/navbar'
import Carousel from './caraousel/carousel'
import Footer from './footer/footer'
import Applications from './applicationbar/appilcations'
import Reasons from "./reasons/reasons"
import bq from './assets/bq.png'
import gp from './assets/gp.png'
import is from './assets/is.png'
import jt from './assets/jt.png'
function Landing() {
  return (<div>
    <Navbar/>
    <Carousel/>
    <Applications/>
    <div className="heag">
            <h3>why Tata  green  battery</h3>
          </div>
    <Reasons icon={is} heading="instant start" detail="Higher cranking power in our batteries ensure instant start . Any time and everytime."/>
    <Reasons icon={jt} heading="japanese technology" detail="Technology from world's leading battery manufacturer and Asia's largest 2-wheeler battery maker."/>
    <Reasons icon={bq} heading="best quality product" detail="Our belif in our products gives us the confidence to give warrenty upto 60 months!"/>
    <Reasons icon={gp} heading="green practices" detail="Not only our batteries are 90% recycleable,we also ensure that we keep our carbon footprint in minimum."/>
    <Footer/>
    </div>
  );
}

export default Landing;
