import React from 'react'
import { useLocation } from 'react-router-dom';
import UseAuth from '../../Auth/UseAuth'


const userCredentials = {}

export default function LoginPage() {

  const location = useLocation();

  const { login } = UseAuth();


  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials, location.state?.from )}>Iniciar sesion</button>
    </>
  )
}
