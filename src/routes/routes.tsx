import React from "react";
import {Navigate, RouteObject} from "react-router-dom";
import Home from "../pages/home/home";

 const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home"/>,
    }, {
        path: "/home",
        element: <Home/>,
    }, {
        path: "/admin",
        element: <h1>pages2</h1>,
    }, {
        //404
        path: "*",
        element: <h1>404</h1>,
    }
]

export default  routes;
