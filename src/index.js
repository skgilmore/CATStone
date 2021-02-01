import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
// import { Button } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Home } from './components/Home';
import { Capstone } from './components/Capstone';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Home /> */}
      <Capstone />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


