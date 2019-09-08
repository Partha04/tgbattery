import './carousel.css'
import React,{Component} from 'react';
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'

const images=[slider2,slider3]
class Carousel extends Component {
    state = {index:0
      }
      componentDidMount()
      {
          this.animateimage()
      }
      animateimage=()=>{
          setInterval(()=>{ const index=(this.state.index +1)%images.length;
                    this.setState({index:index});}
                ,10000)
      }
    changenextimg=()=>{
        const index=(this.state.index +1)%images.length;
        this.setState({index:index})
    }
    changeprevimg=()=>{

        if(this.state.index>0){
        this.setState({index:this.state.index-1})}
    }
    render() { 
         const curimage=images[this.state.index]
        return (<div className="caraousel">
            <div className="CAcontainer">
                <img className='imageslide' src={curimage} alt="slideimg"/>
                <div className='prev' onClick={this.changeprevimg}><h2>❮</h2></div>
                <div className='next' onClick={this.changenextimg}><h2>❯</h2></div>
            </div>
            <div className="sepcaraousel"></div>
        </div>
         );
    }
}
 
export default Carousel;
