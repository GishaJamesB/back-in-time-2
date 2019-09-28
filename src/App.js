import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header'
import Navigation from './components/Navigation'
import ContentBox from './components/ContentBox'

function BasicExample() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navigation />
          <ContentBox /> 
        </div>
        </div>
    </Router>
  );
}


export default BasicExample;
