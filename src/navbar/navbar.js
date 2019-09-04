import React,{Component} from 'react';
import logo from "./logo.png"

import './navbar.css';
class Navbar extends Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() { 
    const menuVis = this.state.showMenu ? 'show' : 'hide';
    return ( <div>
      <header>
        <nav className="navbar">
          <a href="/"><img className="imgnav" src={logo} alt="logo" /></a>
          <div className="navlinks">
            <ul>
              <li className="linkbutton" href="aboutus"><a href="aboutus">about us</a></li>
              <li className="linkbutton"><a href="Products">products</a></li>
              <li className="linkbutton"><a href="dealernet">dealer network</a></li>
              <li className="linkbutton"><a href="contactus">contact us</a></li>
            </ul>
          </div>
          <div className="burger" onClick={this.toggleMenu}>
            <div className="lines" />
            <div className="lines" />
            <div className="lines" />
          </div>
        </nav> 
      </header>
      <div className="sep">
        <div className={menuVis}>
          <ul>
            <li className="linkbutton"><a href="aboutus">about us</a></li>
            <li className="linkbutton"><a href="Products">products</a></li>
            <li className="linkbutton"><a href="dealernet">dealer network</a></li>
            <li className="linkbutton"><a href="contactus">contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="sep2"></div>
    </div>
     );
  }
}
 
export default Navbar;