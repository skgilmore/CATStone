import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Capstone } from './Capstone';
// import { Button } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Capstone />
   
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


