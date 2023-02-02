import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";



const RolRoutes = ({hasRole : role}) => {
  const { user } = UseAuth();


  if (role && user.role !== role) return <Navigate to="/login" />

  return (
    <Outlet />
  )

};

export default RolRoutes;