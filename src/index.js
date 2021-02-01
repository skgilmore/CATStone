import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Capstone } from './components/Capstone';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Capstone />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


