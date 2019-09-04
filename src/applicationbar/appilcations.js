import React,{Component} from 'react'
import './applications.css'
import appli from './application.png'
import home from './home.png'
import bikes from './bikes.png'
import cars from './cars.png'
import trctors from './tractors.png'
import { transcode } from 'buffer';

class Apllications extends Component {
    state = {  }
    render() { 
        return (<div><div className="applications">
                <img className='appli' src={appli} alt="appli"/>

            <div className="buton">
                <a href="/products" className="box">
                    <p>home</p>
                    <div className="imgcontainer"><img src={home} alt="home"/></div>
                </a>
                <a href="/products" className="box">
                    <p>cars</p>
                    <div className="imgcontainer"><img src={cars} alt="home"/></div>
                </a>
                <a href="/products" className="box">
                    <p>bikes</p>
                    <div className="imgcontainer"><img src={bikes} alt="home"/></div>
                </a>

                <a href="/products" className="box">
                    <p>tractors</p>
                    <div className="imgcontainer"><img src={trctors} alt="home"/></div>
                </a>

            </div>
        </div>
        <div className="sepapp"></div> 
        </div> );
    }
}
 
export default Apllications;