import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";




export const AuthRoutes = () => {

  // const {user} = useAuth();
  
  const {user} = { isAuthenticated: UseAuth() };
  return user.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;

  
  
};



