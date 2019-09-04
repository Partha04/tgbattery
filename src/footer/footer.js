import './footer.css'
import facebook from './FACEBOOK.png'
import instagram from './INSTAGRAM.png'
import twitter from './TWITTER.png'
import React,{Component} from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className='footer'>
                <div className="fotlink">
                    <a href="aboutus">about us</a>
                    <a href="products">products</a>
                    <a href="dealernet">dealer network</a>
                    <a href="contactus">contact us</a>
                </div>
                <div className='social'>
                     <h3>Follow us on:</h3>
                    <a href=""><img src= {twitter}alt="twit"/></a>
                   <a href=""><img src= {instagram}alt="inst"/></a> 
                    <a href=""><img src= {facebook}alt="fb"/></a>
                </div>
            </div>
        );
    }
}
 
export default Footer;