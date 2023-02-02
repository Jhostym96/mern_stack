import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";



const PublicRoutes = () => {

  const { isLogged } = UseAuth();

  if (isLogged()) return <Navigate to={routes.projects} />

  return (
  <Outlet />
  )

};

export default PublicRoutes;



