import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth'


const Login = () => {
    const navigator = useNavigate()
    const handleLogin = () => {
        login();
        navigator("/dashboard", { replace: true });
    }
  return (
    <>
    <h1>
        Login Page
    </h1>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login