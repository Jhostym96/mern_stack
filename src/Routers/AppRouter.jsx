import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, AccountPage, ProjectPage, ProjectsPage, NotFoundPage } from '../Pages'
import { UsersPage } from '../Pages/Admin'
import { MainLayout } from '../Layouts'
import { AuthRoutes } from './AuthRoutes'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<AuthRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
