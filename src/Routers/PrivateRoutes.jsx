import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";



const PrivateRoutes = () => {
  const { user } = UseAuth();

  if (!user) return <Navigate to="/login" />

  return (
    <Outlet />
  )

};

export default PrivateRoutes;



