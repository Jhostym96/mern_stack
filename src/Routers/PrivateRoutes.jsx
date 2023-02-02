import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";



const PrivateRoutes = () => {

  const location = useLocation()
  // console.log(location)
  const { isLogged } = UseAuth();

  if (!isLogged()) return <Navigate to={routes.login} state={{ from: location }} />

  // if (!user) return <Navigate to="/login" />

  return (
    <Outlet />
  )

};

export default PrivateRoutes;



