import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, AccountPage, ProjectPage, ProjectsPage, NotFoundPage } from '../Pages'
import { UsersPage } from '../Pages/Admin'
import { MainLayout } from '../Layouts'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import RolRoutes from './RolRoutes'
import roles from '../Helpers/Roles'
import routes from '../Helpers/Routes'

export default function AppRouter() {
  return (
    
    // <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route element={<PublicRoutes />}>
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegisterPage />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.account} element={<AccountPage />} />
            <Route path={routes.projects} element={<ProjectsPage />} />
            <Route path={routes.project()} element={<ProjectPage />} />

            <Route element={<RolRoutes hasRole={roles.admin} />}>
              <Route path={routes.admin.users} element={<UsersPage />} />
            </Route>

          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    // </BrowserRouter> 
  )
}
