import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import {PieChart} from "../components/Chart"
import Chart from 'chart.js';
import {DoughnutController} from 'chart.js'


export const Capstone = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("capstone_customer")) {
          return (
            <>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);