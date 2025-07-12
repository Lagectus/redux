import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home page
        <p>Go to home profile</p>
        <ul>
            <li><Link to='user/1'>user 1</Link>
            </li>
            <li><Link to='user/9999'>user 2</Link></li>
        </ul>
        <p>Go to dashboard</p>
        <ul>
            <li><Link to="/dashboard" > dashboard</Link></li>
            <li><Link to="/login"> Login</Link></li>
        </ul>
    </div>
  )
}

export default Home