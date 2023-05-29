import React from 'react'
import { Navigate } from 'react-router-dom';
import { ClickableProps } from '../DataTypes';

const PrivateRoute = ({ children }:ClickableProps) => {
    let token:null | string;
     token = JSON.parse(localStorage.getItem("t-token")|| '{}');

    // if (!token || token === "") {
    //     return <Navigate to="/login" />;
    //   }
    return <>{children}</>;
}

export default PrivateRoute
