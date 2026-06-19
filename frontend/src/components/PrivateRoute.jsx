import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const {isLoggedIn} = useAuth();

    // If the user is logged in, render the child components (Outlet).
    // Otherwise, redirect to the login page ("/").
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;