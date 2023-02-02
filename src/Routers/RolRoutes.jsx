import React from "react";
import { Navigate, Outlet, useLocation} from "react-router-dom";
import UseAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";



const RolRoutes = ({hasRole : role}) => {


  const { hasRole } = UseAuth();


  if (role && !hasRole(role)) return <Navigate to={routes.home} />

  return (
    <Outlet />
  )

};

export default RolRoutes;