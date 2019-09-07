import React, { Component } from "react";
import Navbar from "./navbar/navbar";

import Leftmenu from "./leftmenu/leftmenu.js";
import Productlist from "./productlist/productlist";
import Rightcol from "./rightcol/rightcol";
import Footer from "./footer/footer";
import "./products.css";
import { listProduct } from "./data/listProduct.js";

class Products extends Component {
  state = {
    listProduct: listProduct,
    search:" "
  };
  handlechange=(e)=>{
    this.setState(
      {
        search:e.target.value,
        listProduct :listProduct.filter(item=>item.p_name.toLowerCase().includes(this.state.search.toLowerCase()))
      }
      )
    
      console.log(e)
    console.log(this.state.listProduct)
  }
  handlesubmit=(str,e)=>{
    this.setState(
      {
        listProduct :listProduct.filter(item=>item.category.includes(str))
      }
      )
      console.log(str)
  
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="productpage">
          <Leftmenu 
          handlechange={this.handlechange}
          handlesubmit={this.handlesubmit}
          />
          <Productlist listProduct={this.state.listProduct} />
          <Rightcol />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Products;
