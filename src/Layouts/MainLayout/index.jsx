import { Outlet } from "react-router-dom";
import { NavBar } from "../../Components";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
