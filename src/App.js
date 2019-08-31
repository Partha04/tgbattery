import React from "react";
import Landing from "./landing";
import Products from "./products";
import Aboutus from './aboutus'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/Products/" component={Products} />
      <Route path="/aboutus/" component={Aboutus} />
      
    </Router>
  );
}

export default App;
