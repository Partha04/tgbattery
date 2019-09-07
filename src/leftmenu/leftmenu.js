import React ,{Component}from "react";
import search from "../assets/search.png";
class Leftmenu extends Component {
  state = {};
  render() {
    const {handlechange,handlesubmit}=this.props
    return (
      <div className="leftmenu">
        <div className="searchbar">
          <input type="text" placeholder=" Type to search..." onChange={handlechange}/>
        </div>

        <div className="category">
          <div className="catagorytab" onClick={()=>handlesubmit("home")}>home </div>
          <div className="catagorytab"onClick={()=>handlesubmit("cars")}>cars</div>
          <div className="catagorytab"onClick={()=>handlesubmit("tractors")} >tractors</div>
          <div className="catagorytab" onClick={()=>handlesubmit("bikes")}>bikes</div>
          <div className="catagorytab" onClick={()=>handlesubmit("other")}>others</div>
        </div>
      </div>
    );
  }
}

export default Leftmenu;
