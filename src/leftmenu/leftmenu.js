import React ,{Component}from "react";
import search from "../assets/search.png";
class Leftmenu extends Component {
  state = {};
  render() {
    const {handlechange,handlesubmit}=this.props
    return (
      <div className="leftmenu">
        <div className="searchbar">
          <input type="text" onChange={handlechange}/>
          <img src={search} alt="a"/>
        </div>

        <div className="category">
          <div className="catagorytab" onClick={()=>handlesubmit("populer")}>populer</div>
          <div className="catagorytab" onClick={()=>handlesubmit("home")}>home </div>
          <div className="catagorytab"onClick={()=>handlesubmit("cars")}>cars</div>
          <div className="catagorytab"onClick={()=>handlesubmit("tractors")} >tractors</div>
          <div className="catagorytab" onClick={()=>handlesubmit("bikes")}>bikes</div>
        </div>
      </div>
    );
  }
}

export default Leftmenu;
