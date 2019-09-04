import React from "react";
import Landing from "./landing";
import Products from "./products";
import Aboutus from './aboutus'
import Contactus from './contactus'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dealernet from "./dealernet";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/Products/" component={Products} />
      <Route path="/aboutus/" component={Aboutus} />
      <Route path="/dealernet/" component={Dealernet} />
      <Route path="/contactus/" component={Contactus} />

      
    </Router>
  );
}

export default App;
