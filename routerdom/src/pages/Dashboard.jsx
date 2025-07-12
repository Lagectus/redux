import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../auth';

const Dashboard = () => {
   const navigate = useNavigate();
   const handleLogout = () => {
        logout();
        navigate('/');
   }
  return (
    <div>
        <h1>dashboard private</h1>
        <button onClick={handleLogout}>Logout</button>
        <p>Welcome to the dashboard!</p>
    </div>
  )
}

export default Dashboard