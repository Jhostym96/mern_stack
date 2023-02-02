import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";



const PublicRoutes = () => {

  const { user } = UseAuth();

  if (user) return <Navigate to="/" />

  return (
  <Outlet />
  )

};

export default PublicRoutes;



