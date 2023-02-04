import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../../Helpers/Routes'
import useAuth from '../../Auth/UseAuth'


export default function NavBar() {


  const { logout, user } = useAuth();

  console.log(user)



  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className='p-2'>
      <Navbar.Brand as={NavLink} to={routes.home}>
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to={routes.projects}>Proyectos</Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link as={NavLink} to={routes.login} hidden={user}>Iniciar Sesion</Nav.Link>
          <Nav.Link as={NavLink} to={routes.register} hidden={user}>Registro</Nav.Link>
          <Nav.Link as={NavLink} to={routes.account}>Mi cuenta</Nav.Link>
          <Nav.Link onClick={logout} hidden={!user}>Cerrar sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
