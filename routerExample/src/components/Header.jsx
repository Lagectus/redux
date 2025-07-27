import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header' style={{display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa'}}>
        <div className='logo'>Logo</div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
            
        </div>
    </div>
  )
}

export default Header