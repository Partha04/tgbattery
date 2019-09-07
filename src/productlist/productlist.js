import React, { Component } from "react";
import Productcard from "./productcard";
class Productlist extends Component {
  state = {};
  render() {
    const {listProduct}=this.props;
    return (
      <div className="productlist">
       {listProduct.map(producs=>{
            return(
              <Productcard 
              key={producs.id} 
              name={producs.p_name}
              image={producs.image}
              details={producs.details}
              warrenty={producs.warrenty}
              />
            )
          })}
      </div>
    );
  }
}

export default Productlist;
